import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, LayoutDashboard, History, Settings, User, Play } from 'lucide-react';
import BalancePanel from './BalancePanel';

export default function Navbar() {
  return (
    <nav className="h-16 bg-[#12121A] border-b border-[#B03052]/15 flex items-center justify-between px-6 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-lg flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.2)] group-hover:scale-105 transition-transform">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#F5F5F7] font-bold text-xl tracking-tight">VocalFlow</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" />
          <NavLink to="/app" icon={<Play className="w-4 h-4" />} label="Builder" />
          <NavLink to="/history" icon={<History className="w-4 h-4" />} label="History" />
          <NavLink to="/playground" icon={<div className="w-4 h-4 flex items-center justify-center text-[10px] font-bold border rounded">AI</div>} label="Playground" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:block">
          <BalancePanel />
        </div>
        
        <div className="flex items-center gap-3 pl-6 border-l border-[rgba(176,48,82,0.15)]">
          <Link to="/settings" className="p-2 text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </Link>
          <Link to="/profile" className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B03052] to-[#D76C82] flex items-center justify-center text-white font-medium text-xs shadow-lg shadow-[rgba(176,48,82,0.2)] hover:scale-105 transition-transform">
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, label }) {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-2 text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
