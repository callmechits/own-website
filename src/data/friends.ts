// src/data/friends.ts
// -----------------------------------------------------------------------------
// Friends page ("the seating chart"). Each friend gets a big name and one line.
//
// Ask before adding someone. A first name or handle is plenty; no surnames,
// schools, or photos unless they say yes.
// -----------------------------------------------------------------------------

export interface Friend {
  name: string;   // what to call them
  line: string;   // one line about them
  href?: string;  // optional link they're happy to share
}

export const friends: Friend[] = [
  // { name: 'Aarav', line: 'Sits at the back. Somehow aces everything.' },
  { name: 'Connor', line: 'Nerdiest Engineer I have met, hates calculus, loves CAD.'},
  { name: 'Amir', line: 'Most Asian looking Non-Asian I know, smallest in the group and most chaotic.'},
  { name: 'Ian', line: 'Hungriest person I know as of now, bro never eats but somehow always eats. Loves having fun.'},
];
