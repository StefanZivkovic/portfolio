# Site Specification — stefanzivkovic.dev

Personal content site. Minimal, techy, dark-first.

## Pages

### `/` — Home

Single page. Grid of cards, one per post. No separate blog index.

Each card shows:

- Title
- Date
- Tags (clickable — filters cards)
- Reading time

Clicking a card navigates to the full post.

### `/posts/[slug]` — Post

Full post content. Rendered from Markdown/MDX.

### `/search` — Search

Global search across all post content (title, tags, body).

## Content Schema

Post frontmatter (Astro content collection):

```ts
{
  title: string;        // required
  date: Date;           // required
  tags: string[];       // required, at least one
  readingTime: number;  // minutes, auto-calculated or manual
  draft?: boolean;      // default false, draft posts not shown in production
}
```

## Features

| Feature                     | Status                 |
| --------------------------- | ---------------------- |
| Card grid on home           | in scope               |
| Tag filtering (client-side) | in scope               |
| Global search               | in scope               |
| RSS feed (`/rss.xml`)       | in scope               |
| Dark mode (dark-first)      | in scope               |
| Cover images                | out of scope (for now) |
| Comments                    | out of scope           |
| About page                  | out of scope (for now) |
| Pagination                  | out of scope (for now) |

## Design Direction

- Dark-first (light mode optional later)
- Minimal — no clutter, generous whitespace
- Techy — monospace accents, subtle code-like aesthetics
- Typography-focused — content is the UI

## Tech Stack

- **Framework**: Astro JS with content collections
- **Styling**: Tailwind CSS
- **Linter**: oxlint
- **Formatter**: Prettier
- **Hosting**: Vercel
