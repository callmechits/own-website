# chits-site

Personal site, drawn as a periodic table. Astro, fully static.

## Run locally
    npm install
    npm run dev          # http://localhost:4321, live reload

## Daily blogging
    npm run new -- "Title of today's post"
Creates `src/content/blog/YYYY-MM-DD.md` as a draft. Write it, delete `draft: true`,
then commit and push. Cloudflare rebuilds in about a minute.
Tags `life` and `math` feed the Lf and Ma elements; any other tag gets its own page.

## Where things live
| To change                      | Edit                          |
|--------------------------------|-------------------------------|
| Table tiles, jokes, positions  | `src/data/elements.ts`        |
| Projects                       | `src/data/projects.ts`        |
| Games and shows                | `src/data/media.ts`           |
| Friends                        | `src/data/friends.ts`         |
| Name, email, links             | `src/data/site.ts`            |
| About page                     | `src/pages/about.astro`       |
| Colours and fonts              | `src/styles/global.css`       |

New section: replace one of the Uue/Ubn/Ubu placeholders in `elements.ts`
and add a page in `src/pages/`.

## Résumé
Drop a copy at `public/resume.pdf`. Remove your phone number from it first.

## Deploy (Cloudflare Pages)
Build command `npm run build`, output directory `dist`. Then attach your domain
and set `site` in `astro.config.mjs`.

Easter egg: ↑ ↑ ↓ ↓ ← → ← → B A on the home page. Esc to undo.
