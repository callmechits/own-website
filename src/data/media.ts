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
    take: 'Rebuilt the controls for keyboard and mouse, which it was never meant for. Worth it.',
    year: 2011,
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
