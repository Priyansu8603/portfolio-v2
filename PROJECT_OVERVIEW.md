# Project Overview

This repository is the second version of Priyansu Kumar's personal portfolio website. It is a Next.js portfolio built with the Pages Router and TypeScript, and it combines static content, portfolio data, blog posts, and media assets into a single site.

## What This Project Does

The site is designed to present:

- a home page with hero content, experience, tech stack, featured posts, featured projects, and volunteering
- an about page
- a projects page
- a blog index and individual blog post pages
- a sessions/talks page
- a photo gallery page at `/showcase`
- an API endpoint at `/api/projects`

The blog supports Markdown-authored posts, an RSS feed, fuzzy search on older posts, and Giscus-powered comments on post pages.

## Tech Stack

- Next.js `^15.3.3`
- React `^18.3.1`
- TypeScript
- Chakra UI + Emotion for UI and styling
- Framer Motion for animation helpers
- `gray-matter` + `remark` for Markdown/front matter parsing
- `react-markdown` + `rehype-raw` for blog rendering
- Fuse.js for blog search
- Giscus for comments
- Vercel Analytics

The app also swaps React for Preact in client production builds through [`next.config.js`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\next.config.js).

## Main Routes

- `/` -> home page
- `/about` -> personal/about content
- `/projects` -> featured and pet projects
- `/blog` -> blog listing
- `/blog/[id]` -> individual Markdown blog post
- `/sessions` -> talks and sessions
- `/showcase` -> photo gallery
- `/api/projects` -> JSON list of filtered project data

## Project Structure

- [`src/pages`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\pages) contains route entry points.
- [`src/components/pages`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\components\pages) contains page-specific UI.
- [`src/components/layout`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\components\layout) contains the shared shell, nav, footer, and metadata helpers.
- [`src/config`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\config) contains structured data for projects, experience, sessions, skills, and volunteering.
- [`src/utils/posts.ts`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\utils\posts.ts) and [`src/utils/projects.ts`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\utils\projects.ts) load Markdown content.
- [`src/styles/theme`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\styles\theme) contains the Chakra theme setup.
- [`content/posts`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\content\posts) stores blog posts in Markdown.
- [`content/projects`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\content\projects) stores older project records in Markdown.
- [`public`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\public) stores resumes, icons, previews, photos, RSS output, and other static assets.

## Content Model

There are two different content patterns in this repo:

1. Markdown content
   - Blog posts live in [`content/posts`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\content\posts).
   - Legacy project entries live in [`content/projects`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\content\projects).

2. TypeScript config content
   - Current homepage/project cards are driven by [`src/config/projects.ts`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\config\projects.ts).
   - Experience, sessions, and skills are driven by config files under [`src/config`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\config).

At the time of inspection, the repo contains:

- 3 Markdown blog posts
- 2 Markdown project entries
- 5 projects in `src/config/projects.ts`

## How Rendering Works

- The home page uses `getStaticProps` to load latest blog posts.
- The blog index uses `getStaticProps` to load all published posts and generate `public/rss.xml`.
- Individual blog posts use `getStaticPaths` + `getStaticProps`.
- Blog content is authored in Markdown front matter and rendered through `react-markdown`.
- The site uses a shared Chakra layout from [`src/pages/_app.tsx`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\pages\_app.tsx) and a custom document in [`src/pages/_document.tsx`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\src\pages\_document.tsx).

## Developer Notes

- The codebase uses absolute imports from `src` via `baseUrl` in [`tsconfig.json`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\tsconfig.json).
- Styling is primarily Chakra-based, with some Emotion-styled components and a small SCSS module for blog post content.
- Security headers are configured in [`next.config.js`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\next.config.js).
- Google Analytics and Vercel Analytics are both wired in.

## Commands

Common scripts from [`package.json`](C:\Users\priya\Downloads\Portfolio\portfolio-v2\package.json):

- `yarn dev`
- `yarn build`
- `yarn start`
- `yarn lint`
- `yarn type-check`
- `yarn analyze`

## Notable Observations

- This appears to be a personalized portfolio focused heavily on Android/mobile engineering.
- The project has some legacy structure still in place, especially around project data: the main projects UI uses TypeScript config, while the API route still reads Markdown project files.
- The workspace currently includes build and dependency artifacts like `.next` and `node_modules`, plus large zip files, which may not be part of the app's source design itself but are present in the folder.
