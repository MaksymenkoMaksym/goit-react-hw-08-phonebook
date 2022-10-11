import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/selectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth } = useSelector(getAuth);
  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
