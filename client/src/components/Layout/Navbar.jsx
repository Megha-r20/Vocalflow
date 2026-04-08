import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings, User, LayoutDashboard, History, FileText, Mic, Beaker } from "lucide-react";
import Badge from "../common/Badge";
import Button from "../common/Button";

export default function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="h-20 bg-[#0B0B10]/95 backdrop-blur-md border-b border-[rgba(176,48,82,0.1)] px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#B03052] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(176,48,82,0.4)] transition-transform group-hover:scale-105">
            <Mic className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="font-bold text-[#F5F5F7] text-xl tracking-tight">VocalFlow Clone</span>
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/login" className="text-[#F5F5F7] hover:text-[#B03052] font-medium transition-colors text-sm">
          Sign In
        </Link>
        <Link to="/signup">
          <Button className="bg-[#B03052] hover:bg-[#D76C82] text-white rounded-full px-8 py-2.5 font-semibold transition-all duration-300 shadow-lg shadow-[rgba(176,48,82,0.2)] hover:shadow-[rgba(176,48,82,0.4)] active:scale-95">
            Get Started
          </Button>
        </Link>
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
