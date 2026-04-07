import React from 'react';
import Badge from '../ui/Badge';
import { Settings, User, Bell } from 'lucide-react';
import './AppNavbar.css';

const AppNavbar = ({ title }) => {
  return (
    <header className="app-navbar">
      <div className="app-navbar-left">
        <h2 className="page-title">{title}</h2>
      </div>
      <div className="app-navbar-right">
        <div className="api-badges">
          <Badge variant="accent">Deepgram: $12.50</Badge>
          <Badge variant="success">Grok: Active</Badge>
        </div>
        <div className="nav-actions">
          <button className="icon-btn"><Bell size={18} /></button>
          <button className="icon-btn"><Settings size={18} /></button>
          <div className="user-avatar">
            <img src="https://ui-avatars.com/api/?name=User&background=B03052&color=fff" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
