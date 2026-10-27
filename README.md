# chits-site

Personal site in the style of a good professor's lecture notes: huge type,
clean pages, jokes in red pen in the margins. Astro, fully static.
Light mode is ink on paper; dark mode is a chalkboard.

## Run locally
    npm install
    npm run dev          # http://localhost:4321, live reload

## Daily blogging
    npm run new -- "Title of today's post"
Creates `src/content/blog/YYYY-MM-DD.md` as a draft. Write it, delete `draft: true`,
then commit and push. Cloudflare rebuilds in about a minute.
Posts are numbered as lectures (oldest = Lecture 1). Every tag gets its own page.

## Where things live
| To change                      | Edit                          |
|--------------------------------|-------------------------------|
| Home page layout and copy      | `src/pages/index.astro`       |
| Projects                       | `src/data/projects.ts`        |
| Games and shows                | `src/data/media.ts`           |
| Friends                        | `src/data/friends.ts`         |
| Name, email, links             | `src/data/site.ts`            |
| About page                     | `src/pages/about.astro`       |
| Colours and fonts              | `src/styles/global.css`       |

Margin jokes: `<Note>text</Note>` placed right before the paragraph it's about.
Project grades come from `status` in `projects.ts` (A, Inc., W).
New section: add a page in `src/pages/` and a link in `nav` in `src/layouts/Base.astro`.


## Deploy (Cloudflare Workers, static assets)
`wrangler.jsonc` makes `npx wrangler deploy` upload `dist/` as static files.
Attach a domain under the Worker's Settings, then set `site` in `astro.config.mjs`.

Easter egg: ↑ ↑ ↓ ↓ ← → ← → B A on any page. Esc to undo.
