import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import Layout from './Layout/Layout';

const SignInSide = lazy(() => import('../pages/Auth'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const HomePage = lazy(() => import('pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/signIn" component={<HomePage />} />
            }
          />

          <Route
            path="/signIn"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<SignInSide />}
              />
            }
          />
          <Route
            path="/signUp"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<SignUp />} />
            }
          />
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </>
  );
};
