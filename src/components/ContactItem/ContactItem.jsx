import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import * as selectors from '../../redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';
import styles from './ContactItem.module.scss';

const ContactsItem = ({ value }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getAllContacts);
  const contact = contacts.filter(item => item.id === value)[0];
  const { name, number } = contact;

  const onDeleteContact = useCallback(
    () => dispatch(operations.deleteContact(value)),
    [dispatch],
  );

  return (
    <li className={styles.contact__item}>
      <p className={styles.contact__text}>
        {name}: {number}
      </p>
      <button
        className={styles.contact__button}
        type="button"
        onClick={onDeleteContact}
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ContactsItem;

