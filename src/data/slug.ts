// src/data/slug.ts
// Turns "Periodic Table 3D" into "periodic-table-3d" for #anchors.
export const slug = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-');
