import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Settings, 
  User, 
  LayoutDashboard, 
  History, 
  FileText, 
  Mic, 
  Beaker, 
  LogOut,
  LayoutGrid,
  Bell
} from "lucide-react";
import Badge from "../common/Badge";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="h-16 bg-[#0B0B10]/80 backdrop-blur-md border-b border-white/5 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* LEFT: LOGO */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-lg flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.2)] transition-transform group-hover:scale-105">
            <Mic className="w-4 h-4 text-white" fill="currentColor" />
          </div>
          <span className="font-bold text-[#F5F5F7] text-lg tracking-tight">VocalFlow</span>
        </Link>
      </div>

      {/* CENTER: NAVIGATION (Only if logged in) */}
      {isLoggedIn && (
        <div className="hidden lg:flex items-center gap-1 bg-[#12121A]/80 p-1 rounded-xl border border-white/10 shadow-lg shadow-[rgba(176,48,82,0.05)]">
          <NavLink to="/dashboard" icon={<LayoutDashboard size={16} />} label="Dashboard" />
          <NavLink to="/app" icon={<LayoutGrid size={16} />} label="Workflows" />
          <NavLink to="/templates" icon={<FileText size={16} />} label="Templates" />
          <NavLink to="/history" icon={<History size={16} />} label="History" />
          <NavLink to="/recorder" icon={<Mic size={16} />} label="Recorder" />
          <NavLink to="/playground" icon={<Beaker size={16} />} label="Playground" />
        </div>
      )}

      {/* RIGHT: AUTH ACTIONS / STATUS */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#12121A]/80 border border-white/5 rounded-full shadow-inner shadow-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B03052] shadow-[0_0_8px_rgba(176,48,82,0.8)] animate-pulse"></div>
                <span className="text-[10px] text-[#9CA3AF] font-bold tracking-widest uppercase">Deepgram</span>
                <span className="text-xs text-[#F5F5F7] font-mono ml-1">$24.50</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#12121A]/80 border border-white/5 rounded-full shadow-inner shadow-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D76C82] shadow-[0_0_8px_rgba(215,108,130,0.8)] animate-pulse"></div>
                <span className="text-[10px] text-[#9CA3AF] font-bold tracking-widest uppercase">Grok</span>
                <span className="text-xs text-[#F5F5F7] font-mono ml-1">$18.30</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 border-l border-white/10 pl-4 ml-2">
              <Link 
                to="/settings"
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                  location.pathname === "/settings" 
                    ? "bg-[#B03052]/10 text-[#D76C82] border border-[#B03052]/30 shadow-[0_0_15px_rgba(176,48,82,0.1)]" 
                    : "text-[#9CA3AF] hover:bg-white/5 hover:text-[#F5F5F7]"
                }`}
                title="Settings"
              >
                <Settings size={18} />
              </Link>
              <Link 
                to="/profile"
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                  location.pathname === "/profile" 
                    ? "bg-[#B03052]/10 text-[#D76C82] border border-[#B03052]/30 shadow-[0_0_15px_rgba(176,48,82,0.1)]" 
                    : "bg-[#12121A] border border-white/5 text-[#9CA3AF] hover:text-[#F5F5F7] hover:border-white/20"
                }`}
                title="Profile"
              >
                <User size={18} />
              </Link>
              <button 
                onClick={handleLogout}
                className="w-9 h-9 bg-gradient-to-br from-[#B03052] to-[#D76C82] flex items-center justify-center rounded-lg text-white shadow-lg shadow-[rgba(176,48,82,0.2)] transition-transform hover:scale-105"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors pr-2">
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-[#B03052] hover:bg-[#D76C82] text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-[rgba(176,48,82,0.2)]"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
        isActive 
          ? "bg-[#1A1A24] text-[#F5F5F7] border border-white/10 shadow-sm" 
          : "text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24]/50"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
