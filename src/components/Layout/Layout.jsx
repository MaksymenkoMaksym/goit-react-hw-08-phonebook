import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAuth } from 'redux/selectors';

import { WelcomeUser } from 'components/WelcomeUser/WelcomeUser';
// import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  const { isAuth } = useSelector(getAuth);
  return (
    <>
      <header>{isAuth && <WelcomeUser />}</header>
      <Outlet />
    </>
  );
};
