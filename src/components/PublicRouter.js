import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

PublicRoute.defaultProps = {
  redirectTo: null,
  routeProps: null,
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  routeProps: PropTypes.any,
  children: PropTypes.element.isRequired,
};

export default PublicRoute;
