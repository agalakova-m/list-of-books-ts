import { ADD_BOOK } from './actionTypes';

export function addBook(book: IBook) {
  return { type: ADD_BOOK, payload: book };
}
