import React from 'react';
import Modal from './components/Modal';
import Form from './components/Form';
import BookList from './components/BookList';

function App() {
  return (
    <div className="container">
      <h1>Book List</h1>
      <BookList books={[]} />
      <Modal>
        <Form />
      </Modal>
    </div>
  );
}

export default App;
