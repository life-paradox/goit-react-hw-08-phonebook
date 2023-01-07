import ContactListItem from 'components/ContactListItem/ContactListItem';
import { StyledList } from 'components/StyledComponents/SC';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibeContacts = (contacts, filterValue) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const visibleContacts = getVisibeContacts(contacts, filterValue);

  if (!contacts?.length) {
    return <p>You can add contacts</p>;
  }

  if (!visibleContacts?.length) {
    return <p>Not found </p>;
  }

  return (
    <StyledList>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </StyledList>
  );
};

export default ContactList;
