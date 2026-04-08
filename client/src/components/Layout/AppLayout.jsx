import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppNavbar from './AppNavbar';
import './Layout.css';

const AppLayout = ({ title }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-main">
        <AppNavbar title={title} />
        <div className="app-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
