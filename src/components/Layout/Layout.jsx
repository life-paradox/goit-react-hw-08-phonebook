import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { StyledLayout } from 'components/StyledComponents/SC';

const { default: AppBar } = require('components/AppBar/AppBar');

const Layout = () => {
  return (
    <StyledLayout>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
