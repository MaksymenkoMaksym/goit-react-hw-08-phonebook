import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectorsAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token: isAuth } = useSelector(getAuth);
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  return isAuth ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
