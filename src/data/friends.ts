// src/data/friends.ts
// -----------------------------------------------------------------------------
// Friends page. Each friend is drawn as their own element tile.
//
// Ask before adding someone. A first name or handle is plenty; no surnames,
// schools, or photos unless they say yes.
// -----------------------------------------------------------------------------

export interface Friend {
  name: string;   // what to call them
  sym: string;    // their element symbol (let them pick)
  line: string;   // one line about them
  href?: string;  // optional link they're happy to share
}

export const friends: Friend[] = [
  // { name: 'Aarav', sym: 'Ar', line: 'Noble gas. Unbothered by anything.' },
];
