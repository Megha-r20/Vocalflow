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
        <div className="hidden lg:flex items-center gap-1 bg-[#12121A]/50 p-1 rounded-xl border border-white/5">
          <NavLink to="/dashboard" icon={<LayoutDashboard size={16} />} label="Dashboard" />
          <NavLink to="/flow-builder" icon={<LayoutGrid size={16} />} label="Workflows" />
          <NavLink to="/templates" icon={<FileText size={16} />} label="Templates" />
          <NavLink to="/history" icon={<History size={16} />} label="History" />
          <NavLink to="/recorder" icon={<Mic size={16} />} label="Recorder" />
          <NavLink to="/flow-builder" icon={<Beaker size={16} />} label="Playground" />
        </div>
      )}

      {/* RIGHT: AUTH ACTIONS / STATUS */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <div className="hidden md:flex items-center gap-2">
              <Badge variant="default" className="bg-[#12121A] border-white/10 text-xs py-1 px-3">
                Deepgram <span className="text-[#F5F5F7] font-bold ml-1">$24.50</span>
              </Badge>
              <Badge variant="default" className="bg-[#12121A] border-white/10 text-xs py-1 px-3">
                Grok <span className="text-[#F5F5F7] font-bold ml-1">$18.30</span>
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 border-l border-white/10 pl-4 ml-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:bg-white/5 hover:text-[#F5F5F7] transition-all">
                <Settings size={18} />
              </button>
              <button 
                onClick={handleLogout}
                className="w-9 h-9 bg-gradient-to-br from-[#B03052] to-[#D76C82] flex items-center justify-center rounded-lg text-white shadow-lg shadow-[rgba(176,48,82,0.2)] transition-transform hover:scale-105"
                title="Logout"
              >
                <User size={18} />
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
