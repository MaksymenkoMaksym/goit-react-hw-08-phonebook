import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';

const SignInSide = lazy(() => import('../pages/Auth'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('pages/Home'));
const PrivateRoute = lazy(() => import('./PrivateRoute/PrivateRoute'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute/RestrictedRoute'));

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
