// src/data/projects.ts
// -----------------------------------------------------------------------------
// Projects content. Order here is display order. The first four also appear
// on the home page.
//
// Each project is "graded" in red pen, based on `status`:
//   stable   = finished and working   → A
//   unstable = still being built      → Inc. (incomplete)
//   decayed  = abandoned              → W (withdrew). Honesty is funny; keep a few.
// -----------------------------------------------------------------------------

export type Status = 'stable' | 'unstable' | 'decayed' | 'retired';

export interface Project {
  name: string;
  when: string;
  status: Status;
  stack: string[];
  summary: string;           // one or two sentences, plain
  points?: string[];         // optional detail lines
  links?: { label: string; href: string }[];
}

/** The red-pen mark, and what it means (used for screen readers and tooltips). */
export const grade: Record<Status, { mark: string; label: string }> = {
  stable:   { mark: 'A',    label: 'Finished' },
  unstable: { mark: 'Inc.', label: 'In progress' },
  retired:  { mark: 'R',    label: 'Retired' },   // "Retired" reads clearer than "Used"
  decayed:  { mark: 'W',    label: 'Abandoned' },
};

export const projects: Project[] = [
  {
    name: 'Periodic Table 3D',
    when: 'Oct 2026',
    status: 'stable',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    summary:
      'A webcam-driven periodic table of all 118 elements, controlled entirely by hand gestures. No mouse, no keyboard, just waving.',
    points: [
      'Two-hand rectangle opens and closes the table; dwell-based thumb selection; pinch to zoom; two-finger rotation.',
      'Animated 3D Bohr and quantum models, with orbitals from hydrogenic radial wavefunctions and electron transitions mapped to visible colour.',
      'Threaded camera capture and a live FPS counter to keep latency down.',
      'It is just one of the coolest things that I built.',
    ],
    // TODO: add { label: 'Source', href: 'https://github.com/callmechits/<repo>' }
    links: [],
  },
  {
    name: 'JEE Advanced mock test platform',
    when: 'Apr 2026',
    status: 'retired',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Google Sheets'],
    summary:
      'A timed exam interface with subject-wise scoring and performance tracking, used by over 2,000 students across two mocks, for $0 in hosting.',
    links: [],
  },
  {
    name: 'ELEGOO robot car',
    when: '2026',
    status: 'unstable',
    stack: ['Arduino', 'C++'],
    summary: 'Teaching a small car on an Arduino UNO to get around on its own. Uses neural network and ML which I find complex as of now.',
    links: [],
  },
];