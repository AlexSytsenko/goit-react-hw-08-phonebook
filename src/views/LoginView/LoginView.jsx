import { useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.scss';



const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    
     switch (name) {
       case 'email':
         setEmail(value);
         break;

       case 'password':
         setPassword(value);
         break;

       default:
         break;
     }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({email, password}));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.title}>Login page</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        autoComplete="off"
      >
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.button}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginView;