import React from "react";
import { Field, Form, Formik } from "formik";
import style from "./SearchBar.module.css";

interface SearchBarProps {
  setQuery: (query: string) => void;
}

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues: FormValues = { query: "" };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    setQuery(values.query);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={style.searchBar}>
          <Field
            name="query"
            placeholder="Search images and photos"
            className={style.input}
          />
          <button type="submit" className={style.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
