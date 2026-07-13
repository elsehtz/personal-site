# personal-site (Zak ElSeht)

Personal site + workbench: portfolio, blog, project/build logs, digital journal, hobby pages, brainstorming board. Dark, cyan-accented, slightly cyberpunk aesthetic. Astro (static) + React islands, deployed to Vercel.

## Stack

- Astro 6, output: static, deployed via `@astrojs/vercel`
- React 19 (`@astrojs/react`) for interactive islands only — most of the site is plain `.astro`
- Tailwind v4 (`@tailwindcss/vite` + `@tailwindcss/typography`), imported via `@import "tailwindcss"` in `src/styles/global.css` — no `tailwind.config.js` theme customization, styling leans on CSS custom properties instead
- GSAP for scroll/entrance animations, Three.js for the hero canvas background
- `@vercel/analytics` wired into `BaseLayout.astro`

Commands: `npm run dev`, `npm run build`, `npm run preview`. No test suite currently.

## Design system

CSS variables defined in `src/styles/global.css` — use these instead of hardcoding colors:

- `--bg: #080a0f`, `--surface: #0d1117` — backgrounds
- `--accent: #6ee7f7`, `--accent-dim: #3bb8cc` — cyan accent
- `--text-primary: #f0f4f8`, `--text-secondary: #7a8799`
- `--border: rgba(255,255,255,0.07)`

Fonts: Space Grotesk (body, via `font-family` default) and Space Mono (`.font-mono`, used for labels/meta). Both loaded from Google Fonts in `global.css`.

Established utility classes — reuse before inventing new ones:

- `.card-glass` — translucent bordered card with hover glow, used for content cards
- `.section-label` — small uppercase mono label (section eyebrows)
- `.gradient-text` — text gradient primary → accent
- `.hr-accent` — faded gradient divider
- `.reveal` — `opacity: 0` starting state for GSAP-driven entrance animations
- `.text-accent` — cyan text

Global touches: custom cursor (dot + ring, disabled under 640px), SVG noise-texture overlay on `body::before`, `@view-transition` for cross-page fades, dark background inlined in `<head>` to prevent white-flash on navigation (don't remove this).

Tailwind is used directly in markup (neutral-800/900 grays, spacing, flex/grid) alongside the CSS-variable system above — new UI should follow whichever pattern the surrounding component already uses rather than mixing both inconsistently.

## Layouts & components

- `BaseLayout.astro` — the shell every page uses: Nav, Footer, custom cursor script, Analytics, `title`/`description`/`fullWidth` props. Always wrap new pages in this (usually via `ContentLayout`).
- `ContentLayout.astro` — wraps `BaseLayout` for article-style content (blog/build/software/recipe detail pages). Renders a prose article with optional back-link, title, description, date. Use this for any new content-detail page rather than rebuilding the header pattern.
- `Nav.astro` — top nav with 4 links (Projects, Journal, Hobbies, Professional) and active-state matching by path prefix. **If you add a new top-level section, add it here.**
- `Card.astro` — link card with title/description/date/tags/meta, used on index/listing pages.
- `Footer.astro`, `PasswordGate.astro` (client-side sessionStorage password gate, keyed by pathname, driven by a `password` field in frontmatter), `HeroCanvas.astro` (Three.js node-network background, only used on the homepage hero), `ResumeButton.tsx` (the one React island, hits `/api/resume-url`).

## Content collections (`src/content.config.ts`)

All collections use `glob` loaders over `src/content/<name>/*.md`. Schemas:

- `blog` — title, description, date, tags (`tech`/`political`/`other`, default `other`), draft, password?
- `software` — title, description, tags (free string[]), github?, live?, date, featured
- `builds` — title, description, category (`EDA`/`3dprint`/`circuit`/`DIY`/`woodworking`), date, images[], status (`completed`/`in-progress`/`planned`), password?
- `recipes` — title, description, category, servings, prepTime, cookTime, ingredients[], password?
- `designPrompts` — title, description, date, tags[], tool?, draft

`src/content/_teamplate.md` is a starting frontmatter template (currently shaped for builds — check the target collection's schema before reusing it).

When adding a piece of content: drop a `.md` file in the right `src/content/<collection>/` folder with matching frontmatter. This alone is enough for existing index/detail pages to pick it up — no code change needed unless the schema itself is changing.

## Routing conventions

- `src/pages/<section>/index.astro` — listing pages (map over `getCollection`, render `Card`s)
- `src/pages/<section>/[slug].astro` — detail pages via `getStaticPaths` + `render()`, wrapped in `ContentLayout`, with `PasswordGate` conditionally wrapping `<Content />` when `data.password` is set
- Non-collection standalone pages live directly under `src/pages/<route>/index.astro` (e.g. `hobbies/boxing.astro`, `brainstorming-board/board.astro`, `media-pantry/currated-sources.astro`)
- `src/pages/api/*.ts` — server endpoints (e.g. `resume-url.ts`, reads R2/S3 env vars at runtime)

## Workflow notes

- Feature work (new pages, animations, redesigns) tends to happen on isolated `claude/*` branches/worktrees rather than directly on `main` — keep that pattern for anything multi-file or visually risky.
- Small content-only additions (new post, new build log entry, tweaking an existing entry) don't need a branch — just add/edit the `.md` file.
- Check `vercel.json` / Vercel build behavior before touching dependency versions — there's a history of `vite` override issues on Vercel builds (see git log), so be careful with `overrides` in `package.json`.
