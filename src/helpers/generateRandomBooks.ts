import { randomInteger } from './randomInt';
import { loremIpsum } from 'lorem-ipsum';

export function generateInitialBooks(): IBook[] {
  let initialBooks = [];

  for (let i = 0; i <= 2; i++) {
    initialBooks.push({
      title: loremIpsum({
        units: 'words',
        count: randomInteger(1, 4),
      }),
      author: loremIpsum({ units: 'words', count: 2 }),
      pages: randomInteger(100, 1000),
      year: randomInteger(1900, 2020),
    });
  }

  return initialBooks;
}
