// src/data/posts.ts
// -----------------------------------------------------------------------------
// Blog helpers shared by the home, blog, tag and post pages.
// Posts are presented as numbered lectures: the oldest post is Lecture 1.
// -----------------------------------------------------------------------------
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All publishable posts, newest first. Drafts appear only in `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', (p: Post) => import.meta.env.DEV || !p.data.draft);
  // Newest first; same-day posts ordered by filename so numbering is stable.
  return all.sort((a: Post, b: Post) =>
    b.data.date.valueOf() - a.data.date.valueOf() || b.id.localeCompare(a.id));
}

/**
 * Lecture numbers by post id. Computed over ALL posts so a post keeps its
 * number on tag pages too. Input must be newest first (as getPosts returns).
 */
export function lectureNumbers(posts: Post[]): Map<string, number> {
  return new Map(posts.map((p, i) => [p.id, posts.length - i]));
}

/**
 * A short plain-text teaser from a post's Markdown body: first paragraph,
 * with Markdown symbols stripped, cut at a word boundary.
 */
export function excerpt(post: Post, max = 220): string {
  const para = (post.body ?? '')
    .replace(/```[\s\S]*?```/g, '')            // drop code blocks
    .split(/\n\s*\n/)                          // paragraphs
    .map((s) => s.replace(/\s+/g, ' ').trim())
    .find((s) => s && !s.startsWith('#')) ?? '';
  const plain = para
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links/images → their text
    .replace(/[*_`>]/g, '');                   // emphasis, code, quotes
  if (plain.length <= max) return plain;
  return plain.slice(0, plain.lastIndexOf(' ', max)) + '…';
}

/** "26 October 2026". UTC so the build machine's time zone can't shift the day. */
export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
