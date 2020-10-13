import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBook } from '../store/actionCreators';

import { Formik, Field, Form } from 'formik';

const initialValues: FormValues = {
  title: '',
  author: '',
  pages: '',
  year: '',
};

type IProps = {
  addBook: (book: IBook) => void;
};

const CustomForm: React.FC<IProps> = ({ addBook }) => {
  const [values, setValues] = useState(initialValues);

  const onSubmit = (values: FormValues) => {
    const newBook = values;
    addBook(newBook);
    setValues(initialValues);
  };

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className="form">
      <h1>Add a book</h1>
      <Formik initialValues={initialValues} onSubmit={() => onSubmit(values)}>
        <Form>
          <div className="field-wrapper">
            <label className="label" htmlFor="title">
              Title of the book
            </label>
            <Field
              id="title"
              name="title"
              placeholder="e.g. Normal People"
              onChange={onInputChange}
              value={values.title}
              required
            />
          </div>

          <div className="field-wrapper">
            <label className="label" htmlFor="author">
              Author's name
            </label>
            <Field
              id="author"
              name="author"
              placeholder="e.g. Sally Rooney"
              onChange={onInputChange}
              value={values.author}
              required
            />
          </div>

          <div className="field-wrapper">
            <label className="label" htmlFor="pages">
              Number of pages
            </label>
            <Field
              id="pages"
              name="pages"
              placeholder="e.g. 266"
              type="number"
              min={10}
              max={2000}
              onChange={onInputChange}
              value={values.pages}
            />
          </div>

          <div className="field-wrapper">
            <label className="label" htmlFor="year">
              Year of publishing
            </label>
            <Field
              id="year"
              name="year"
              placeholder="e.g. 2018"
              type="number"
              min={1000}
              max={2020}
              onChange={onInputChange}
              value={values.year}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

const mapDispatchToProps = { addBook };

export default connect(null, mapDispatchToProps)(CustomForm);
