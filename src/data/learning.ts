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
  { id: 'maths', label: 'Maths', parent: 'me' },
  { id: 'calc', label: 'Multivariate calculus', parent: 'maths',
    note: 'Calculus that works on ℝ, ℤ and everything in between.' },
  { id: 'jump', label: 'Forward jump σ', parent: 'time-scales',
    note: 'σ(t): the next point after t. The whole theory hangs on it.' },
  { id: 'graininess', label: 'Graininess μ', parent: 'time-scales',
    note: 'μ(t) = σ(t) − t. Zero on ℝ, one on ℤ.' },
  { id: 'circle-plus', label: 'The ⊕ group', parent: 'time-scales',
    note: 'p ⊕ q = p + q + μpq, and why it forms a group.' },
  { id: 'analysis', label: 'Real analysis', parent: 'maths' },
  { id: 'baire', label: 'Baire category theorem', parent: 'analysis',
    note: 'Complete metric spaces are too big to be a countable union of nowhere-dense sets.' },
  { id: 'horn', label: "Gabriel's horn", parent: 'analysis',
    note: 'Finite volume, infinite surface area. You can fill it but not paint it.' },
  { id: 'number-theory', label: 'Number theory', parent: 'maths' },
  { id: 'valuations', label: 'Prime valuations', parent: 'number-theory',
    note: 'Count over each prime separately, then multiply.', also: ['codeforces'] },

  // ── Algorithms ─────────────────────────────────────────────────────────
  { id: 'algorithms', label: 'Algorithms', parent: 'me' },
  { id: 'codeforces', label: 'Codeforces', parent: 'algorithms',
    note: 'G++20, and too many wrong answers on test 3.' },
  { id: 'modular', label: 'Modular arithmetic', parent: 'algorithms',
    note: 'Everything mod 10⁹ + 7.' },

  // ── Computer vision ────────────────────────────────────────────────────
  { id: 'vision', label: 'Computer vision', parent: 'me' },
  { id: 'opencv', label: 'OpenCV', parent: 'vision',
    note: 'Webcam frames in, everything else out.' },
  { id: 'mediapipe', label: 'MediaPipe hands', parent: 'vision',
    note: '21 landmarks per hand, which turned out to be enough for a periodic table.' },
  { id: 'gestures', label: 'Gesture design', parent: 'mediapipe',
    note: 'Dwell to select, pinch to zoom, two fingers to rotate.' },

  // ── Physics ────────────────────────────────────────────────────────────
  { id: 'physics', label: 'Physics', parent: 'me' },
  { id: 'orbitals', label: 'Hydrogenic orbitals', parent: 'physics',
    note: 'Radial wavefunctions, drawn in 3D for the periodic table.', also: ['mediapipe'] },
  { id: 'transitions', label: 'Electron transitions', parent: 'orbitals',
    note: 'Energy gaps mapped to visible colour.' },

  // ── Making things ──────────────────────────────────────────────────────
  { id: 'making', label: 'Making things', parent: 'me' },
  { id: 'arduino', label: 'Arduino', parent: 'making',
    note: 'An ELEGOO car that is slowly learning to drive itself.' },
  { id: 'astro', label: 'Astro', parent: 'making',
    note: 'This site.' },
  { id: 'canvas', label: 'Canvas 2D', parent: 'astro',
    note: 'Pixel Jotaro, and this map.' },
  { id: 'ffmpeg', label: 'FFmpeg', parent: 'making',
    note: 'An automated anime edit pipeline. Mostly flags.' },

  // ── History ────────────────────────────────────────────────────────────
  { id: 'history', label: 'Space Age history', parent: 'me',
    note: 'HIST 387.' },
  { id: 'ksp', label: 'Kerbal Space Program', parent: 'history',
    note: 'Running a fictional national space program, for credit.' },
];
