import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsItem from '../ContactItem';
import * as operations from '../../redux/contacts/contacts-operations';
import * as selectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.scss';


const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getVisibleContacts);

  useEffect(() => dispatch(operations.fetchContacts()), []);
  return (
    <ul className={styles.contacts__list}>
      {contacts.map(({ id }) => (
        <ContactsItem key={id} value={id} />
      ))}
    </ul>
  );
};


export default ContactsList;

