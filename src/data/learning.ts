// src/data/learning.ts
// -----------------------------------------------------------------------------
// The learning map on the home page: everything I've been picking up, as a
// tree drawn like a constellation (see components/LearningMap.astro).
//
// To add something:
//   { id: 'short-unique-id', label: 'What it is', parent: 'id-of-its-branch',
//     note: 'optional one line, shown on hover' }
//
//   • `parent` decides where it hangs. Leave it out only for the centre node.
//   • A new top-level branch = parent: 'me'.
//   • `also` draws a faint dashed link to other topics it connects to, across
//     branches (e.g. orbitals ↔ the periodic table project).
//   • Order doesn't matter, and the layout recomputes itself on every build.
//   • Each top-level branch gets a colour automatically. To pick one yourself,
//     add colour: '#hex' to the branch (it's used in both light and dark mode).
// -----------------------------------------------------------------------------

export interface Topic {
  id: string;
  label: string;
  parent?: string;     // id of the node it branches off
  note?: string;       // one line shown when hovered
  also?: string[];     // cross-links to other topic ids
  colour?: string;     // top-level branches only: override the automatic colour
}

export const topics: Topic[] = [
  // ── Centre ─────────────────────────────────────────────────────────────
  { id: 'me', label: 'Chits', note: 'Everything listed, with varying confidence.' },

  // ── Maths ──────────────────────────────────────────────────────────────
  // Tutorial
  // { id: 'maths', label: 'Maths', parent: 'me' },
  // { id: 'calc', label: 'Multivariate calculus', parent: 'maths',
  //  note: 'Calculus extending beyond 2 and more variables.' },

  // Maths
  { id: 'maths', label: 'Maths', parent: 'me' },
  { id: 'calc', label: 'Multivariate calculus', parent: 'maths', note: 'Calculus extending beyond 2 and more variables.' },
  { id: 'realA', label: 'Real Analysis', parent: 'maths', note: 'Basic to Advanced Analysis.'},
  //{ id: ''}
];
