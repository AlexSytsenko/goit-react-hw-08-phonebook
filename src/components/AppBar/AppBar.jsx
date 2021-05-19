import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.scss';
import authSelectors from '../../redux/auth/auth-selectors';


const AppBar = () => {

  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  
  console.log(isLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );

}

export default AppBar;
