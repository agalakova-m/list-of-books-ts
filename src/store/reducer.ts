import { ADD_BOOK } from './actionTypes';
import { generateInitialBooks } from '../helpers/generateRandomBooks';

const initialState: BookState = {
  books: generateInitialBooks(),
};

export const rootReducer = (
  state: BookState = initialState,
  action: BookAction,
): BookState => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: state.books.concat([action.book]) };
    default:
      return state;
  }
};
