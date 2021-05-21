import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../helpers/routes';
import styles from './Navigation.module.scss';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
