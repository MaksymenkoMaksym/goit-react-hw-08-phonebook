import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectorsAuth';

import { WelcomeUser } from 'components/WelcomeUser/WelcomeUser';
import { Suspense } from 'react';

export const Layout = () => {
  const { isAuth } = useSelector(getAuth);
  return (
    <>
      <header>{isAuth && <WelcomeUser />}</header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
