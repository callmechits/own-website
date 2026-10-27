// src/content.config.ts
// -----------------------------------------------------------------------------
// Defines the "blog" collection: every Markdown file in src/content/blog/
// becomes a post. The schema validates frontmatter at build time, so a typo
// like `dat:` instead of `date:` fails the build instead of shipping silently.
// -----------------------------------------------------------------------------
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // Each file's name (minus .md) becomes its id and URL: 2026-10-26.md → /blog/2026-10-26/
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),                // accepts "2026-10-26"
    tags: z.array(z.string()).default([]), // e.g. [life, math, games]
    mood: z.string().nullish(),           // one word (may be left blank), shown next to the date
    draft: z.boolean().default(false),    // drafts build locally, never ship
  }),
});

export const collections = { blog };
