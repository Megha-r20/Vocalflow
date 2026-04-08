import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Settings, User, LayoutDashboard, History, FileText, Mic, Beaker, LogOut } from "lucide-react";
import Badge from "../common/Badge";
import { HoverButton } from "../common/HoverEffects";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const isLanding = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="h-20 bg-black/80 backdrop-blur-md border-b border-[rgba(176,48,82,0.1)] px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#B03052] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(176,48,82,0.3)] transition-transform group-hover:scale-110">
            <Mic className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="font-bold text-[#F5F5F7] text-xl tracking-tight">VocalFlow</span>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <div className="hidden md:flex items-center gap-2 mr-4 border-r border-white/10 pr-6">
              <NavLink to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
              <NavLink to="/flow-builder" icon={<Beaker size={18} />} label="Playground" />
              <NavLink to="/history" icon={<History size={18} />} label="History" />
              <NavLink to="/settings" icon={<Settings size={18} />} label="Settings" />
            </div>
            
            <HoverButton 
              onClick={handleLogout}
              className="text-sm font-bold shadow-lg shadow-[rgba(176,48,82,0.3)] flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </HoverButton>
          </>
        ) : (
          <>
            <Link to="/login">
              <HoverButton variant="ghost" className="text-sm px-4 py-2 hover:bg-white/5 text-[#F5F5F7]">
                Sign In
              </HoverButton>
            </Link>
            <Link to="/signup">
              <HoverButton className="text-sm font-bold shadow-lg shadow-[rgba(176,48,82,0.3)]">
                Get Started
              </HoverButton>
            </Link>
          </>
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
          ? "bg-[#1A1A24] text-[#F5F5F7] border border-[rgba(176,48,82,0.2)]" 
          : "text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24]"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
