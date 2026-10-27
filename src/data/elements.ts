// src/data/elements.ts
// -----------------------------------------------------------------------------
// The home page is a periodic table; every section of the site is an element.
// This file is the single source of truth for that table, so adding a new
// section means adding one object here and one page under src/pages/.
//
// Grid: 8 columns × 3 rows, shaped like the top of the real table.
//   row 1: element at col 1, a detail panel across cols 2–7, element at col 8
//   rows 2–3: eight elements each
// On narrow screens the grid collapses to 4 columns and these positions are
// ignored (see .table in index.astro).
// -----------------------------------------------------------------------------

import { site } from './site';

/**
 * Categories are coloured after the four visible hydrogen (Balmer) emission
 * lines. `nm` is the real wavelength; the home page uses it to place each
 * line on the spectrum legend at its true position.
 */
export const categories = {
  work:  { label: 'Work',  line: 'Hα', nm: 656.3 },
  life:  { label: 'Life',  line: 'Hβ', nm: 486.1 },
  media: { label: 'Media', line: 'Hγ', nm: 434.0 },
  links: { label: 'Links', line: 'Hδ', nm: 410.2 },
} as const;

export type Category = keyof typeof categories;

export interface Element {
  n: number;          // atomic number shown in the tile corner
  sym: string;        // one- to three-letter symbol
  name: string;       // element name = section name
  cat: Category | 'unknown';
  href?: string;      // where clicking goes; omitted → tile is inert
  external?: boolean; // opens in a new tab
  row: number;        // 1-based grid row (desktop only)
  col: number;        // 1-based grid column (desktop only)
  // Joke "properties" shown in the detail panel on hover/focus.
  mass: string;
  note: string;
}

// Helper: an outbound link that has not been filled in yet becomes an
// inert tile instead of a dead link.
const maybe = (url: string) => (url ? { href: url, external: true } : {});

export const elements: Element[] = [
  // ── Row 1 ────────────────────────────────────────────────────────────────
  { n: 1, sym: 'Ch', name: 'Chits', cat: 'work', href: '/about/', row: 1, col: 1,
    mass: '1 human, approximately',
    note: 'The lightest element, and the one everything else here is made of.' },
  { n: 2, sym: 'Hi', name: 'Hello', cat: 'links', href: `mailto:${site.email}`, row: 1, col: 8,
    mass: 'one email',
    note: 'Inert until contacted. Reacts well to good questions.' },

  // ── Row 2: work block (left) then life block (right) ────────────────────
  { n: 3, sym: 'Pr', name: 'Projects', cat: 'work', href: '/projects/', row: 2, col: 1,
    mass: '5 and counting',
    note: 'Things that were built, and some still being built.' },
  { n: 4, sym: 'Xp', name: 'Experience', cat: 'work', href: '/about/#experience', row: 2, col: 2,
    mass: '2 roles',
    note: 'Flutter in production; the ethics of AI on paper.' },
  { n: 5, sym: 'Aw', name: 'Awards', cat: 'work', href: '/about/#awards', row: 2, col: 3,
    mass: '3 INMOs',
    note: 'Olympiad maths, and a physics contest that went rather well.' },
  { n: 6, sym: 'Cv', name: 'Résumé', cat: 'work', href: '/resume.pdf', row: 2, col: 4,
    mass: '1 page, as is the law',
    note: 'The formal version of this table.' },
  { n: 7, sym: 'Bl', name: 'Blog', cat: 'life', href: '/blog/', row: 2, col: 5,
    mass: 'grows daily',
    note: 'A post most days. Half-life of any given opinion: about a week.' },
  { n: 8, sym: 'Lf', name: 'Life', cat: 'life', href: '/blog/tag/life/', row: 2, col: 6,
    mass: 'unmeasured',
    note: 'Posts about everything that is not work.' },
  { n: 9, sym: 'Ma', name: 'Maths', cat: 'life', href: '/blog/tag/math/', row: 2, col: 7,
    mass: 'countably infinite',
    note: 'Problems, proofs, and the occasional inequality that ruined a weekend.' },
  { n: 10, sym: 'Fr', name: 'Friends', cat: 'life', href: '/friends/', row: 2, col: 8,
    mass: 'priceless, but finite',
    note: 'The people who keep the reactor from melting down.' },

  // ── Row 3: media, then unknowns, then links ─────────────────────────────
  { n: 11, sym: 'Gm', name: 'Games', cat: 'media', href: '/games/', row: 3, col: 1,
    mass: 'too many hours',
    note: 'Played, playing, and abandoned at the final boss.' },
  { n: 12, sym: 'Tv', name: 'Shows', cat: 'media', href: '/shows/', row: 3, col: 2,
    mass: '1 more episode',
    note: 'What is on the screen, with honest one-line reviews.' },
  // Real IUPAC placeholder names for elements nobody has made yet.
  { n: 119, sym: 'Uue', name: 'Ununennium', cat: 'unknown', row: 3, col: 3,
    mass: 'predicted',
    note: 'Not yet synthesised. Probably a side project.' },
  { n: 120, sym: 'Ubn', name: 'Unbinilium', cat: 'unknown', row: 3, col: 4,
    mass: 'predicted',
    note: 'Theorised to exist after the next all-nighter.' },
  { n: 121, sym: 'Ubu', name: 'Unbiunium', cat: 'unknown', row: 3, col: 5,
    mass: 'predicted',
    note: 'Reserved for whatever this website becomes next.' },
  { n: 13, sym: 'Gh', name: 'GitHub', cat: 'links', ...maybe(site.github), row: 3, col: 6,
    mass: 'many commits',
    note: 'Source code, including this site.' },
  { n: 14, sym: 'Ln', name: 'LinkedIn', cat: site.linkedin ? 'links' : 'unknown',
    ...maybe(site.linkedin), row: 3, col: 7,
    mass: 'professionally weightless',
    note: 'The serious network.' },
  { n: 122, sym: 'Ubb', name: 'Unbibium', cat: 'unknown', row: 3, col: 8,
    mass: 'predicted',
    note: 'Island of stability, allegedly.' },
];

/** Look up an element by symbol (used by sub-page headers). */
export const bySym = (sym: string) => elements.find((e) => e.sym === sym)!;
