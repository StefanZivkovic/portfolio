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
| Card grid on home           | done                   |
| Tag filtering (client-side) | done                   |
| Global search               | done                   |
| RSS feed (`/rss.xml`)       | done                   |
| Dark mode (dark-first)      | done                   |
| Cover images                | out of scope (for now) |
| Comments                    | out of scope           |
| About page                  | out of scope (for now) |
| Pagination                  | out of scope (for now) |

## Remaining Work

### Deployment

- [ ] Connect repo to Vercel
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `dist`
- [ ] Set Node version: `>=22.12.0`
- [ ] Verify search works on production (Pagefind runs at build time on Vercel)
- [ ] Point custom domain `stefanzivkovic.dev` to Vercel

### Polish

- [ ] 404 page (`src/pages/404.astro`)
- [ ] Basic OG/social meta tags (title, description, og:url) in Layout
- [ ] Verify RSS feed end-to-end on production

### Content

- [ ] Replace dummy posts with real content
- [ ] Review search result styling against site theme

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
