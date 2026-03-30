---
title: "Continuation Passing Style in Coroutines"
date: "2026-01-11"
legacyID: "continuation-passing-style-in-coroutines"
thumbnail: "📘"
published: true
latest: true
description: "A deep dive into Continuation Passing Style in Kotlin coroutines, explaining how suspend functions compile into state machines and why coroutines suspend without blocking threads."
cover: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*BGngYai3T1ASmDMx13U3Mw.png"
articleLink: "/blog"
tags:
  - Continuation Pattern
  - Kotlin Coroutines
  - Android Internals
  - Android Architecture
  - Suspend Function
---

One of the most fascinating parts of modern Android engineering is how we handle asynchronous work.

We have moved from callback-heavy code to elegant coroutine-based flows. But to truly appreciate that elegance, we need to understand what changed under the hood: **Continuation Passing Style (CPS)**.

CPS is the bridge between the clean suspend code we write and the state-machine logic the compiler/runtime executes.

If you want to master coroutines, look beyond the `suspend` keyword and understand continuation mechanics.

## Start with the Core Idea

A continuation means:

The remaining part of computation after a suspension point.

In Kotlin coroutines, a continuation stores everything needed to resume a suspended function exactly where it stopped.

A continuation captures:

- Where to resume execution (state/label)
- What data is needed (locals/intermediate values)
- How to resume (dispatcher/context)
- How to complete (value or exception)

Kotlin defines it as:

```kotlin
public interface Continuation<in T> {
    public val context: CoroutineContext
    public fun resumeWith(result: Result<T>)
}
```

Here, `T` is the logical return type of the suspend function.

- `context` describes where/how resumption happens (Dispatcher, Job, CoroutineName, handlers)
- `resumeWith` is the trigger invoked when async work finishes with success or failure

Important: `resumeWith` is called by suspend machinery (timers, callbacks, dispatchers, I/O adapters), not manually by your coroutine code in normal usage.

## The Old Problem: Callback Hell

What we want to express is straightforward:

```kotlin
fun loadUser(): User {
    val token = fetchToken()     // network
    val user = fetchUser(token)  // network
    return user
}
```

But network calls are asynchronous, so synchronous style used to become nested callbacks:

```kotlin
fetchToken { token ->
    fetchUser(token) { user ->
        showUser(user)
    }
}
```

Problems:

- Harder readability as flow grows
- Scattered error handling
- Weak lifecycle/cancellation structure

## Coroutines Give Sequential Syntax

With suspend functions:

```kotlin
suspend fun loadUser(): User {
    val token = fetchToken() // suspension point
    val user = fetchUser(token) // suspension point
    return user
}
```

This reads sequentially, but executes asynchronously without blocking a thread.

## What the Compiler Actually Builds

Conceptually, the compiler rewrites suspend code into a continuation-driven state machine:

```kotlin
fun loadUser(continuation: Continuation<User>): Any {
    when (state) {
        0 -> {
            state = 1
            fetchToken(object : Continuation<String> {
                override val context = continuation.context
                override fun resumeWith(result: Result<String>) {
                    token = result.getOrThrow()
                    loadUser(continuation)
                }
            })
            return COROUTINE_SUSPENDED
        }

        1 -> {
            state = 2
            fetchUser(token, object : Continuation<User> {
                override val context = continuation.context
                override fun resumeWith(result: Result<User>) {
                    user = result.getOrThrow()
                    loadUser(continuation)
                }
            })
            return COROUTINE_SUSPENDED
        }

        2 -> return user
    }

    throw IllegalStateException("Invalid coroutine state")
}
```

Labels map to states:

- 0 -> function entry
- 1 -> after `fetchToken()`
- 2 -> after `fetchUser()`

Each label is one state in the generated state machine.

## Label 0: What Really Happens

At state 0:

1. Function starts execution.
2. Label advances to 1.
3. `fetchToken()` is invoked with continuation.
4. If async, function returns `COROUTINE_SUSPENDED` immediately.
5. `loadUser()` exits.

Crucial insight:

The function exits completely at suspension. It does not block the thread and does not keep running in the background.

The native call stack is unwound, thread is free, and only continuation state remains.

Later, when token arrives, continuation gets resumed:

```kotlin
continuation.resumeWith(Result.success("abc_token"))
```

Then `loadUser()` is re-entered and continues from label 1.

## Label 1: Second Suspension

At state 1:

1. Label advances to 2.
2. `fetchUser(token)` starts with continuation.
3. If async, function again returns `COROUTINE_SUSPENDED`.
4. Function exits, thread is released.

When user data arrives:

```kotlin
continuation.resumeWith(Result.success(user))
```

Function re-enters at label 2 and returns final value.

## Timeline Mental Model

```text
loadUser() enters
  -> fetchToken() starts
  -> returns COROUTINE_SUSPENDED
  -> function exits

(network happens)

resumeWith(token)
  -> loadUser() re-enters at label 1
  -> fetchUser() starts
  -> returns COROUTINE_SUSPENDED
  -> function exits

(network happens)

resumeWith(user)
  -> loadUser() re-enters at label 2
  -> returns result
```

## The Most Important Truth

Coroutines do not pause threads.

They suspend computation by saving state, exiting early, and later resuming from the right state via continuation.

A useful way to frame it:

A coroutine does not continue on an old call stack. It re-enters execution and jumps to the correct state-machine label.

## Glimpse of Decompiled Pattern

In generated code, Kotlin typically uses a `ContinuationImpl` with a `label` field and an `invokeSuspend` resume entry:

```kotlin
$continuation = new ContinuationImpl($completion) {
    Object result;
    int label;

    public final Object invokeSuspend(Object $result) {
        this.result = $result;
        this.label |= Integer.MIN_VALUE;
        return HomeViewModel.this.loadUser((Continuation) this);
    }
};
```

A common optimization pattern checks whether incoming completion is already the same continuation instance (resume path) vs creating a new one (fresh call path). The high bit marker (`Integer.MIN_VALUE`) indicates resumed execution mode.

## Final Thoughts

Continuation Passing Style is the real engine behind suspend functions.

Once you internalize CPS, coroutine behavior becomes predictable:

- Why suspend functions are non-blocking
- Why state labels exist
- Why cancellation and structured concurrency feel natural
- Why sequential code can still be asynchronous

This understanding does more than satisfy curiosity. It makes you better at debugging coroutine edge cases, reasoning about performance, and designing robust Android architectures.
