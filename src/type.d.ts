interface IBook {
  title: string;
  author: string;
  pages: number | string;
  year: number | string;
}

interface FormValues {
  title: string;
  author: string;
  pages: number | string;
  year: number | string;
}

type BookState = {
  books: IBook[];
};

type BookAction = {
  type: string;
  payload: IBook;
};
