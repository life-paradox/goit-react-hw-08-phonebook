import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { Item } from 'components/StyledComponents/SC';

const ContactListItem = memo(({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <button id={id} onClick={onDelete}>
        Delete
      </button>
    </Item>
  );
});

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
