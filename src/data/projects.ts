// src/data/projects.ts
// -----------------------------------------------------------------------------
// Projects page content. Order here is display order.
// `status` uses nuclear vocabulary because of the theme:
//   stable   = finished and working
//   unstable = in progress
//   decayed  = abandoned (honesty is funny; keep a few)
// -----------------------------------------------------------------------------

export type Status = 'stable' | 'unstable' | 'decayed';

export interface Project {
  name: string;
  when: string;
  status: Status;
  stack: string[];
  summary: string;           // one or two sentences, plain
  points?: string[];         // optional detail lines
  links?: { label: string; href: string }[];
}

export const statusLabel: Record<Status, string> = {
  stable: 'Stable',
  unstable: 'Unstable (in progress)',
  decayed: 'Decayed',
};

export const projects: Project[] = [
  {
    name: 'Periodic Table 3D',
    when: 'Oct 2026',
    status: 'stable',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    summary:
      'A webcam-driven periodic table of all 118 elements, controlled entirely by hand gestures. The theme of this site is not a coincidence.',
    points: [
      'Two-hand rectangle opens and closes the table; dwell-based thumb selection; pinch to zoom; two-finger rotation.',
      'Animated 3D Bohr and quantum models, with orbitals from hydrogenic radial wavefunctions and electron transitions mapped to visible colour.',
      'Threaded camera capture and a live FPS counter to keep latency down.',
    ],
    // TODO: add { label: 'Source', href: 'https://github.com/callmechits/<repo>' }
    links: [],
  },
  {
    name: 'JEE Advanced mock test platform',
    when: 'Apr 2026',
    status: 'stable',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Google Sheets'],
    summary:
      'A timed exam interface with subject-wise scoring and performance tracking, used by over 2,000 students across two mocks, for $0 in hosting.',
    links: [],
  },
  {
    name: 'Anime arc editing pipeline',
    when: '2026',
    status: 'unstable',
    stack: ['Python', 'Ollama', 'FFmpeg', 'DaVinci Resolve'],
    summary:
      'Scrapes a character’s lore, has a local LLM pace the arc into a timeline, then cuts episodes into clips and a Resolve-ready timeline.',
    links: [],
  },
  {
    name: 'A national space program, in Kerbal',
    when: 'Fall 2026',
    status: 'unstable',
    stack: ['Kerbal Space Program', 'Video'],
    summary:
      'A fictional country’s space race, told in three short films for HIST 387 (History of the Space Age).',
    links: [],
  },
  {
    name: 'ELEGOO robot car',
    when: '2026',
    status: 'unstable',
    stack: ['Arduino', 'C++'],
    summary: 'Teaching a small car on an Arduino UNO to get around on its own.',
    links: [],
  },
];
