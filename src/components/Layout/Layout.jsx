import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectorsAuth';

import { WelcomeUser } from 'components/WelcomeUser/WelcomeUser';

export const Layout = () => {
  const { isAuth } = useSelector(getAuth);
  return (
    <>
      <header>{isAuth && <WelcomeUser />}</header>
      <Outlet />
    </>
  );
};
