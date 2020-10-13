import React from 'react';
import { connect } from 'react-redux';

type IProps = {
  books: IBook[];
};

const heads = ['Название', 'Автор', 'Количество страниц', 'Год'];

const BookList: React.FC<IProps> = ({ books }) => {
  return books.length ? (
    <table className="table">
      <thead className="thead">
        <tr>
          {heads.map((head) => (
            <td className="td" key={head}>
              {head}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          const { title, author, pages, year } = book;
          return (
            <tr key={title}>
              <td className="td">{title}</td>
              <td className="td">{author}</td>
              <td className="td">{pages}</td>
              <td className="td">{year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>There's no books yet!</p>
  );
};

const mapStateToProps = (state: BookState) => {
  return { books: state.books };
};

export default connect(mapStateToProps, null)(BookList);
