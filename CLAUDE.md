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

- `/commit` — stage and commit changes with an auto-generated message
- `/commit-push-pr` — commit, push, and open a GitHub PR in one step
- `/clean_gone` — prune local branches deleted from remote
- `/lint` — run oxlint and report issues
- `/format` — run Prettier and apply formatting

## Conventions

- **Commits**: conventional commits style (`feat:`, `fix:`, `content:`, `chore:`, etc.)
- **Linting**: run `/lint` before committing new code (not required for content/markdown edits)
- **Formatting**: run `/format` before committing; Prettier handles `.astro`, `.ts`, `.js`, `.md`, `.mdx`, `.css` files
- **Content**: blog posts live in `src/content/` as Markdown or MDX files with typed frontmatter via Astro content collections
