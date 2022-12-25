import React from 'react';
import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { getIsLoading, getError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />

      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default App;
