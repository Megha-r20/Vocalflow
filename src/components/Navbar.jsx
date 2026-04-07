import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings, User, LayoutDashboard, History, FileText, Mic, Beaker } from "lucide-react";
import Badge from "./UI/Badge";
import Button from "./UI/Button";

export default function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="h-16 bg-[#12121A]/80 backdrop-blur-xl border-b border-[rgba(176,48,82,0.15)] px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 min-w-[32px] min-h-[32px] bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-[rgba(176,48,82,0.2)] overflow-hidden">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[#F5F5F7] tracking-tight">VocalFlow</span>
        </Link>

        {!isLanding && (
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" />
            <NavLink to="/app" label="Workflows" />
            <NavLink to="/templates" icon={<FileText className="w-4 h-4" />} label="Templates" />
            <NavLink to="/history" icon={<History className="w-4 h-4" />} label="History" />
            <NavLink to="/recorder" icon={<Mic className="w-4 h-4" />} label="Recorder" />
            <NavLink to="/playground" icon={<Beaker className="w-4 h-4" />} label="Playground" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isLanding ? (
          <>
            <Link to="/login">
              <Button variant="ghost" className="text-[#F5F5F7] hover:bg-[#1A1A24]">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#B03052] hover:bg-[#8f2642] text-white">Get Started</Button>
            </Link>
          </>
        ) : (
          <>
            <div className="hidden sm:flex items-center gap-2">
              <Badge className="bg-[#1A1A24] border border-[rgba(176,48,82,0.3)] text-[#F5F5F7] hover:bg-[#1A1A24] px-3 py-1 flex items-center">
                <span className="text-xs opacity-60 mr-1.5">Deepgram</span>
                <span className="font-semibold">$24.50</span>
              </Badge>
              <Badge className="bg-[#1A1A24] border border-[rgba(176,48,82,0.3)] text-[#F5F5F7] hover:bg-[#1A1A24] px-3 py-1 flex items-center">
                <span className="text-xs opacity-60 mr-1.5">Grok</span>
                <span className="font-semibold">$18.30</span>
              </Badge>
            </div>

            <Link
              to="/settings"
              className="w-9 h-9 rounded-lg bg-[#1A1A24] hover:bg-[#B03052]/20 border border-[rgba(176,48,82,0.2)] hover:border-[rgba(176,48,82,0.4)] flex items-center justify-center transition-all duration-200 group"
            >
              <Settings className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#B03052]" />
            </Link>

            <Link
              to="/profile"
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#B03052] to-[#D76C82] flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-[rgba(176,48,82,0.2)]"
            >
              <User className="w-4 h-4 text-white" />
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
