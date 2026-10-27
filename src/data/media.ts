// src/data/media.ts
// -----------------------------------------------------------------------------
// Games and shows share one shape so one component (Shelf.astro) renders both.
// To log something: add an object to the top of the right array. That's it.
//
// rating: out of 10, optional. Leave it off for things you have not finished.
// take:   one honest line. The funnier the better.
// -----------------------------------------------------------------------------

export type MediaStatus = 'current' | 'finished' | 'dropped' | 'queued';

export interface MediaItem {
  title: string;
  status: MediaStatus;
  rating?: number;
  take: string;
  year?: number;    // release year, optional
}

export const games: MediaItem[] = [
  {
    title: 'Killzone 3',
    status: 'finished',
    take: 'Best and one of the first masterpieces I played. I also had to input map controller onto keyboard (it was a nightmare).',
    year: 2011,
  },
  {
    title: 'Uncharted 2',
    status: 'dropped',
    take: 'Best masterpiece that I could not finish because my PS3 gave up after the 16th chapter. I wish I could go back and complete it.',
  },
  {
    title: 'Days Gone',
    status: 'dropped',
    take: 'Pretty good game until I played it, I just lost interest after my days playing it. Even though I would go back to play it.',
  },
  {
    title: 'Uncharted 4',
    status: 'finished',
    take: '10/10. What a game; it was the first game that I downloaded on my new laptop because I love the Uncharted series.',
  },
  {
    title: 'The Last of Us Part 2',
    status: 'current',
    take: '11/10. I have not finished it, but I love it so much. Great mechanics/visuals/story. As a zombie game fan, I am so happy everytime playing this.',
  },
  {
    title: 'Forza Horizon 6',
    status: 'current',
    take: 'My first High-end Racing Game, I play it almost everyday cos it is soooo fun. My main car right now is the Lambo Aurento something.',
  },
  {
    title: 'Rocket League',
    status: 'current',
    take: 'My first multiplayer game outside specific genres. I used to play this on my old laptop, so many memories. Now, started it again just to play with my college friends.',
  },
  {
    title: 'Minecraft',
    status: 'current',
    take: 'No need to explain.',
  },
  {
    title: 'World War Z',
    status: 'finished',
    take: 'Such a fun game to play multiplayer on and just chill out. No grinding, just hop on and shoot lol.'
  }
  // { title: '', status: 'current', rating: 8, take: '' },
];

export const shows: MediaItem[] = [
  // Example:
  // { title: 'Show name', status: 'current', take: 'One line on it.' },
  {
    title: 'The Mentalist',
    status: 'current',
    take: '10/10. Recommend it to everyone. I larp about being PJ. I love the show and relate to it so much.',
  },
  {
    title: 'Breaking Bad',
    status: 'dropped',
    take: '10/10 for the time that I watched. I had so much fun watching the other side of the world.',
  },
  {
    title: 'Money Heist',
    status: 'finished',
    take: '10/10. Soooooo good. I loved every season of it till the end. I just could not finish the extra stuff to watch. I wish I would have invested more time in that.',
  },
  {
    title: 'Squid Game',
    status: 'finished',
    take: 'What an ending. I love the guy man. The show was so disconnected from everything that I have ever watched. I wish I had some more series like that.',
  },
  {
    title: 'All of Us are Dead',
    status: 'finished',
    take: 'I loved the series. One of the first things that I almost binge-watched fully (excluding the waiting for the season part). It is just so much close to me because I am a student asw.',
  },
];

/** Status wording differs by medium ("Playing" vs "Watching"). */
export const statusWord = {
  games: { current: 'Playing', finished: 'Finished', dropped: 'Dropped', queued: 'Up next' },
  shows: { current: 'Watching', finished: 'Finished', dropped: 'Dropped', queued: 'Up next' },
} as const;
