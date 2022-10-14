import { Outlet, useLocation } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import Main from 'pages/Main';
import { Suspense } from 'react';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <header>
        <Navigation />
      </header>
      {isHome && <Main />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
