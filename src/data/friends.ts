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
  { name: 'Ian', line: 'Hungriest person I know as of now, bro never eats but somehow always eats. Loves having fun. And he is gay'},
  { name: 'Dominic', line: 'Mr. Dr. Pepper. Probably drinks more Dr. Pepper than Water. Also he is Texan so he is kinda international like me. HOWDY MATE!'},
  { name: 'Jacob', line: 'CRACK!'},
  { name: 'Shaun', line: 'White Cute Boy, but he drives cars idk how those 2 are correlated.'},
  { name: 'Ozzy', line: 'Same name as the To-Go Box, roommate so I have to add him otherwise he cracks me. Typical Gym boy with no girlfriend. Also, he is always naked in the apartment, I guess it is a kink.'}
];
