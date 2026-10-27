// src/data/posts.ts
// -----------------------------------------------------------------------------
// Blog helpers shared by the index, tag, and post pages.
// -----------------------------------------------------------------------------
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All publishable posts, newest first. Drafts show only in `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', (p: Post) => import.meta.env.DEV || !p.data.draft);
  return all.sort((a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** "26 Oct 2026". UTC so the build machine's time zone can't shift the day. */
export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/** "October 2026", for month headings. */
export const fmtMonth = (d: Date) =>
  d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
