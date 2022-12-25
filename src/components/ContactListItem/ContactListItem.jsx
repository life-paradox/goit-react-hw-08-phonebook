import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { deleteContact } from 'redux/operations';

const ContactListItem = memo(({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  return (
    <li className={css.item}>
      <span>
        {name}: {number}
      </span>
      <button className={css.deleteBtn} id={id} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
});

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
