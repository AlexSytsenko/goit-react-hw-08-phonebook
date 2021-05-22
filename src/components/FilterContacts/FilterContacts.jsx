import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import * as actions from '../../redux/contacts/contacts-actions';
import * as selectors from '../../redux/contacts/contacts-selectors';
import styles from './FilterContacts.module.scss';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);

  const onChange = useCallback(
    e => dispatch(actions.changeFilter(e.currentTarget.value)),
    [dispatch],
  );
 
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default FilterContacts;
