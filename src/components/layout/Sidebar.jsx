import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  BarChart3, 
  Layout, 
  History, 
  Layers, 
  Mic, 
  User, 
  Settings, 
  Play, 
  LogOut 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: BarChart3, path: '/dashboard' },
    { name: 'Builder', icon: Layout, path: '/app' },
    { name: 'Playground', icon: Play, path: '/playground' },
    { name: 'History', icon: History, path: '/history' },
    { name: 'Templates', icon: Layers, path: '/templates' },
    { name: 'Recorder', icon: Mic, path: '/recorder' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/dashboard" className="logo">
          <span className="logo-accent">V</span>F
        </Link>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path} 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span className="sidebar-label">{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-item logout">
          <LogOut size={20} />
          <span className="sidebar-label">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
