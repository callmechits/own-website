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
  
  // { title: '', status: 'current', rating: 8, take: '' },
];

export const shows: MediaItem[] = [
  // Example:
  // { title: 'Show name', status: 'current', take: 'One line on it.' },
];

/** Status wording differs by medium ("Playing" vs "Watching"). */
export const statusWord = {
  games: { current: 'Playing', finished: 'Finished', dropped: 'Dropped', queued: 'Up next' },
  shows: { current: 'Watching', finished: 'Finished', dropped: 'Dropped', queued: 'Up next' },
} as const;
