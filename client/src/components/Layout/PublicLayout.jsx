import React from 'react';
import { Outlet } from 'react-router-dom';
import { LandingNavbar, Footer } from './PublicNavigation';

const PublicLayout = () => {
  return (
    <div className="public-layout gradient-bg">
      <LandingNavbar />
      <div className="public-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
