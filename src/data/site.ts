// src/data/site.ts
// -----------------------------------------------------------------------------
// Identity and outbound links, kept in one place so every page agrees.
// Deliberately NOT included: phone number. Anything on a public site gets
// scraped by spam bots within days.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Chitrarath Singh Mehra',
  short: 'Chits',
  // One plain sentence for <meta name="description"> and the home page.
  tagline:
    'Computer science at Purdue. Olympiad maths, physics, and software that watches your hands.',
  email: 'cmehra@purdue.edu',
  github: 'https://github.com/callmechits',
  // TODO: paste your LinkedIn profile URL. Until then the tile is marked
  // "undiscovered" automatically (see elements.ts).
  linkedin: '',
} as const;
