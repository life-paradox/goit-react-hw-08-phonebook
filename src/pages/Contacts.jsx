import React from 'react';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { getIsLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  ContactsContainer,
  Section,
  StyledMain,
  Title,
} from 'components/StyledComponents/SC';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledMain>
      <ContactsContainer>
        <Section>
          <Title>Add new contact</Title>
          <ContactForm />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter />

          {isLoading && !error && <Loader />}
          <ContactList />
        </Section>
      </ContactsContainer>
    </StyledMain>
  );
};

export default Contacts;
