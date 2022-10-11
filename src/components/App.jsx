import SignInSide from '../pages/Auth';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp/SignUp';

import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/Home';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute redirectTo="/signIn" component={<HomePage />} />
            }
          />

          <Route
            path="/signIn"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignInSide />} />
            }
          />
          <Route
            path="/signUp"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignUp />} />
            }
          />
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </>
  );
};
