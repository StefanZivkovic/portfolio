# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio and content site at stefanzivkovic.dev. Built with Astro JS, deployed on Vercel. Primarily a writing/content platform — blog posts, thoughts, and experiences.

## Stack (planned)

- **Framework**: Astro JS with content collections (Markdown/MDX)
- **Styling**: Tailwind CSS
- **Linter**: oxlint
- **Formatter**: Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- **Hosting**: Vercel

## Commands

Once the project is scaffolded, standard commands will be:

```bash
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview production build locally
npm run lint      # run oxlint
npm run format    # run prettier (write)
npm run format:check  # check formatting without writing (CI)
```

## Slash commands

- `/commit-push-pr` — commit, push, and open a GitHub PR in one step
- `/clean_gone` — prune local branches deleted from remote

## Conventions

- **Commits**: conventional commits style (`feat:`, `fix:`, `content:`, `chore:`, etc.)
- **Formatting/Linting**: runs automatically on every file Claude writes or edits (PostToolUse hooks); run `npm run format` or `npm run lint` manually if needed
- **Content**: blog posts live in `src/content/` as Markdown or MDX files with typed frontmatter via Astro content collections
