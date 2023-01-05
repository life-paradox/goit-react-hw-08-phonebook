import React from 'react';
import css from '../components/App.module.css';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { getIsLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.title}>Contacts</h2>
        <Filter />

        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
    </main>
  );
};

export default Contacts;
