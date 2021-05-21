import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import operations from '../../redux/contacts/contacts-operations';
import selectors from '../../redux/contacts/contacts-selectors';
import styles from './Form.module.scss';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getAllContacts);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChangeForm = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'number':
        setNumber(value);
        break;

      case 'name':
        setName(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isUniqueContact()) {
      const message = `${name} is already in contacts.`;

      return toast.warning(message);
    }

    const newContact = {
      name,
      number,
    };

    dispatch(operations.addContact(newContact));
    reset();
  };

  const isUniqueContact = () => {
    return contacts.find(contact => contact.name === name);
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          value={name}
          onChange={handleChangeForm}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
          required
          value={number}
          onChange={handleChangeForm}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
