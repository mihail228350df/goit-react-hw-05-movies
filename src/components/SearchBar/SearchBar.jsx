import { Formik, Form, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function SearchBar({ setSearchParams }) {
  const validationSchema = Yup.object({
    query: Yup.string().required('Name is required'),
  });

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const query = values.query.trim();
        if (query === '') {
          Notiflix.Notify.warning('Enter the name of the movie!!!');
        }
        setSearchParams(query !== '' ? { query } : {});
        //  actions.resetForm();
      }}
    >
      <Form>
        <Field type="text" name="query" />
        <ErrorMessage name="query" component="div" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}

SearchBar.propTypes = { setSearchParams: PropTypes.func.isRequired };