interface IBook {
  title: string;
  author: string;
  pages: number;
  year: number;
}

type BookState = {
  books: IBook[];
};

type BookAction = {
  type: string;
  book: IBook;
};

type DispatchType = (args: BookAction) => BookAction;
