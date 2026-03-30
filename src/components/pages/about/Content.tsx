import { Box, Button, Spinner, Stack, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";

const AboutCode = () => {
  const [status, setStatus] = useState<"idle" | "running" | "output">("idle");

  // ✅ FULL INPUT CODE (ESCAPED PROPERLY)
  const codeInput = useMemo(() => {
    return `data class TechStack(
    val languages: Set<String>,
    val androidCore: Set<String>,
    val systemServices: Set<String>,
    val backendTools: Set<String>,
    val devTools: Set<String>
)

object Priyansu {

    val name = "Priyansu Kumar"
    val role = "Software Engineer (Android)"
    val location = "India"
    val currentlyAt = "Aaztra Technologies Pvt. Ltd. – Building FitPro from scratch"

    val motto by lazy {
        "| Learn Internals | Write Clean Code | Build Scalable Apps |"
    }

    val techStack = TechStack(
        languages = setOf("Kotlin", "Java", "Dart"),
        androidCore = setOf(
            "Jetpack Compose", "XML", "Coroutines", "Flow API", "Retrofit",
            "Dagger2", "Room", "MVVM", "Clean Architecture", "Multi Modules"
        ),
        systemServices = setOf(
            "Services", "Broadcast Receiver", "SharedPreferences", "Notifications", "WorkManager"
        ),
        backendTools = setOf("PostgreSQL", "Firebase", "MongoDB", "NodeJS"),
        devTools = setOf("Gradle", "Git/GitHub", "Postman", "Swagger", "Dokka")
    )

    sealed class Experience(
        val company: String,
        val role: String,
        val period: String,
        val highlights: List<String>
    ) {
        class Current(
            company: String,
            role: String,
            period: String,
            highlights: List<String>
        ) : Experience(company, role, period, highlights)

        class Past(
            company: String,
            role: String,
            period: String,
            highlights: List<String>
        ) : Experience(company, role, period, highlights)
    }

    val experiences = listOf(
        Experience.Current(
            company = "Aaztra Technologies Pvt. Ltd.",
            role = "Software Engineer",
            period = "Jan 2026 – Present",
            highlights = listOf(
                "Built FitPro Android App and FitPro Kotlin Shell App from scratch (22k+ lines, 160+ commits)",
                "Core features: Product Catalog, Wishlist, Cart, Order Processing, QR Scan, Multi-channel Notifications",
                "Tech: Kotlin, Jetpack Compose, Coroutines, MVVM, Clean Architecture, Firebase, Google ML Kit"
            )
        ),
        Experience.Past(
            company = "Orufy Technologies Pvt. Ltd.",
            role = "SDE - Android Intern",
            period = "Jul 2025 – Dec 2025",
            highlights = listOf(
                "Worked on Webtonative SDK – converted websites to Android apps (250+ clients)",
                "Refactored 5000+ lines, reducing build time by 35%",
                "Integrated RevenueCat, Passcode Module, In-App Updates, Orufy Connect SDK"
            )
        ),
        Experience.Past(
            company = "Enbraun Technologies Pvt. Ltd.",
            role = "Mobile App Developer Intern",
            period = "Jan 2025 – Feb 2025",
            highlights = listOf(
                "Developed mobile version of eResourceScheduler SAAS",
                "Features: Resource Management, JWT Auth, Forgot/Reset Password",
                "Tech: Flutter, NodeJS, PostgreSQL, MVVM"
            )
        )
    )

    data class Project(
        val name: String,
        val date: String,
        val description: String,
        val tech: List<String>
    )

    val projects = listOf(
        Project(
            name = "Maxx Proxy Manager",
            date = "Feb 2026",
            description = "Proxy manager to save, organise, test, and browse proxies from one place. Autofill from clipboard, batch testing, in-built browser with logs.",
            tech = listOf("Kotlin", "Jetpack Compose", "OkHttp", "WebView", "Room DB")
        ),
        Project(
            name = "Khabar News App",
            date = "Jul 2025",
            description = "Offline-first news reader with full CRUD, search, and local persistence.",
            tech = listOf("Kotlin", "MVVM", "Coroutines", "Flow", "Retrofit", "Dagger2", "Room DB")
        )
    )

    val education = mapOf(
        "B.Tech (CSE)" to "NIMS Institute of Computing, Rajasthan (2022–2026) – CGPA 8.5",
        "Intermediate (XII)" to "Kendriya Vidyalaya HEC No.1 Ranchi – 92.8% (PCM: 93.6%)",
        "Matriculation (X)" to "Kendriya Vidyalaya HEC No.1 Ranchi – 91% (Science: 99%)"
    )

    val openToOpportunities = true

    private fun String.divider() {
        println(
            """
            \${"-".repeat(50)}
            \$this
            \${"-".repeat(50)}
            """.trimIndent()
        )
    }

    fun printSummary() {
        with(this) {
            "\${name.uppercase()} – \$role".divider()

            println("\$location  |  \$currentlyAt")
            println("\$motto\\n")

            "TECH STACK".divider()
            with(techStack) {
                println("Languages: \${languages.joinToString(", ")}")
                println("Android:   \${androidCore.joinToString(", ")}")
                println("Services:  \${systemServices.joinToString(", ")}")
                println("Backend:   \${backendTools.joinToString(", ")}")
                println("Tools:     \${devTools.joinToString(", ")}")
            }

            "EXPERIENCE".divider()
            experiences.forEach { exp ->
                val tag = when (exp) {
                    is Experience.Current -> "CURRENT"
                    is Experience.Past -> "PAST"
                }

                println("\\n\$tag  \${exp.company} – \${exp.role} (\${exp.period})")
                exp.highlights.forEach { println("   • \$it") }
            }

            "PROJECTS".divider()
            projects.forEach { proj ->
                println("\\n\${proj.name} (\${proj.date})")
                println("   \${proj.description}")
                println("   Tech: \${proj.tech.joinToString(", ")}")
            }

            "EDUCATION".divider()
            education.forEach { (degree, detail) ->
                println("• \$degree : \$detail")
            }

            if (openToOpportunities) {
                "Open to exciting opportunities. Let's build something amazing together."
                    .divider()
            }
        }
    }
}

fun main() {
    Priyansu.printSummary()
}`;
  }, []);

  const outputSummary = `--------------------------------------------------
PRIYANSU KUMAR – Software Engineer (Android)
--------------------------------------------------

India  |  Aaztra Technologies Pvt. Ltd. – Building FitPro from scratch
| Learn Internals | Write Clean Code | Build Scalable Apps |

--------------------------------------------------
TECH STACK
--------------------------------------------------
Languages: Kotlin, Java, Dart
Android:   Jetpack Compose, XML, Coroutines, Flow API, Retrofit, Dagger2, Room, MVVM, Clean Architecture, Multi Modules
Services:  Services, Broadcast Receiver, SharedPreferences, Notifications, WorkManager
Backend:   PostgreSQL, Firebase, MongoDB, NodeJS
Tools:     Gradle, Git/GitHub, Postman, Swagger, Dokka

--------------------------------------------------
EXPERIENCE
--------------------------------------------------

CURRENT  Aaztra Technologies Pvt. Ltd. – Software Engineer (Jan 2026 – Present)
   • Built FitPro Android App and FitPro Kotlin Shell App from scratch (22k+ lines, 160+ commits)
   • Core features: Product Catalog, Wishlist, Cart, Order Processing, QR Scan, Multi-channel Notifications
   • Tech: Kotlin, Jetpack Compose, Coroutines, MVVM, Clean Architecture, Firebase, Google ML Kit

PAST  Orufy Technologies Pvt. Ltd. – SDE - Android Intern (Jul 2025 – Dec 2025)
   • Worked on Webtonative SDK – converted websites to Android apps (250+ clients)
   • Refactored 5000+ lines, reducing build time by 35%
   • Integrated RevenueCat, Passcode Module, In-App Updates, Orufy Connect SDK

PAST  Enbraun Technologies Pvt. Ltd. – Mobile App Developer Intern (Jan 2025 – Feb 2025)
   • Developed mobile version of eResourceScheduler SAAS
   • Features: Resource Management, JWT Auth, Forgot/Reset Password
   • Tech: Flutter, NodeJS, PostgreSQL, MVVM

--------------------------------------------------
PROJECTS
--------------------------------------------------

Maxx Proxy Manager (Feb 2026)
   Proxy manager to save, organise, test, and browse proxies from one place. Autofill from clipboard, batch testing, in-built browser with logs.
   Tech: Kotlin, Jetpack Compose, OkHttp, WebView, Room DB

Khabar News App (Jul 2025)
   Offline-first news reader with full CRUD, search, and local persistence.
   Tech: Kotlin, MVVM, Coroutines, Flow, Retrofit, Dagger2, Room DB

--------------------------------------------------
EDUCATION
--------------------------------------------------
• B.Tech (CSE) : NIMS Institute of Computing, Rajasthan (2022–2026) – CGPA 8.5
• Intermediate (XII) : Kendriya Vidyalaya HEC No.1 Ranchi – 92.8% (PCM: 93.6%)
• Matriculation (X) : Kendriya Vidyalaya HEC No.1 Ranchi – 91% (Science: 99%)

--------------------------------------------------
Open to exciting opportunities. Let's build something amazing together.
--------------------------------------------------`;

  // 🎨 SYNTAX HIGHLIGHTER
  const highlightCode = (raw: string) => {
    const escape = (text: string) =>
      text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let code = escape(raw);

    // 🟢 Comments
    code = code.replace(/(\/\/.*)/g, '<span style="color:#6A9955">$1</span>');

    // 🟠 Strings
    code = code.replace(/("[^"]*")/g, '<span style="color:#CE9178">$1</span>');

    // 🔵 Keywords
    code = code.replace(
      /\b(object|data class|val|fun|return|with|class)\b/g,
      '<span style="color:#569CD6;font-weight:500">$1</span>'
    );

    // 🟣 Types
    code = code.replace(
      /\b(Int|String|Boolean|List|Set|Map)\b/g,
      '<span style="color:#4EC9B0">$1</span>'
    );

    // 🟡 Functions
    code = code.replace(
      /\b(setOf|println|trimIndent)\b/g,
      '<span style="color:#DCDCAA">$1</span>'
    );

    return code;
  };

  const highlightedCode = useMemo(() => highlightCode(codeInput), [codeInput]);

  const handleRun = () => {
    if (status === "running") return;
    setStatus("running");
    setTimeout(() => setStatus("output"), 1200);
  };

  const handleReset = () => setStatus("idle");

  return (
    <Box position="relative" w="100%">
      <Box
        position="absolute"
        top={2}
        right={2}
        zIndex={2}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Button
          size="sm"
          colorScheme="purple"
          onClick={handleRun}
          isLoading={status === "running"}
        >
          Run
        </Button>

        <Button
          size="sm"
          colorScheme="purple"
          onClick={handleReset}
          variant="outline"
          disabled={status === "running"}
        >
          Reset
        </Button>

        {status === "running" && (
          <Stack direction="row" align="center" spacing={2}>
            <Spinner size="sm" />
            <Text fontSize="xs" color="white">
              Executing...
            </Text>
          </Stack>
        )}
      </Box>

      <Box
        bg={status === "output" ? "gray.800" : "gray.900"}
        color={status === "output" ? "white" : "gray.100"}
        p={6}
        borderRadius="2xl"
        fontFamily="monospace"
        fontSize={[14, 16]}
        whiteSpace="pre-wrap"
        lineHeight="1.8"
        pt={10}
        minH="480px"
        overflowX="auto"
      >
        {status === "output" ? (
          <Box as="pre" m={0}>
            {outputSummary}
          </Box>
        ) : (
          <Box
            as="pre"
            m={0}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        )}
      </Box>
    </Box>
  );
};

export default AboutCode;
