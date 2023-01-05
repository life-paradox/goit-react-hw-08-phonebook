import css from './Layout.module.css';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { default: AppBar } = require('components/AppBar/AppBar');

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
