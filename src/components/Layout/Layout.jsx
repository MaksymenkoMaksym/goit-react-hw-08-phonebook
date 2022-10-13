import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectorsAuth';

import { WelcomeUser } from 'components/WelcomeUser/WelcomeUser';
import { Navigation } from 'components/Navigation/Navigation';
import Main from 'pages/Main';
// import ResponsiveAppBar from 'components/AppBar/AppBar';

export const Layout = () => {
  const { isAuth } = useSelector(getAuth);
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      {/* <header>{isAuth ? <WelcomeUser /> : <Navigation />}</header> */}
      <header>
        {/* <WelcomeUser /> */}
        <Navigation />
      </header>

      {isHome && (
        <Main>
          <h1>My site</h1>
        </Main>
      )}
      <Outlet />
    </>
  );
};
