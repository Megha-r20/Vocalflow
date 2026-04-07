import React from "react";
import { Link } from "react-router-dom";
import { Settings, User, LayoutDashboard, History, FileText, Mic, Beaker } from "lucide-react";
import Badge from "./UI/Badge";

export default function Navbar() {
  return (
    <nav className="h-16 bg-[#12121A]/80 backdrop-blur-xl border-b border-[rgba(176,48,82,0.15)] px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/app" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-[rgba(176,48,82,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-[#F5F5F7]">VocalFlow</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/dashboard"
            className="px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] transition-all duration-200 flex items-center gap-2"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            to="/app"
            className="px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] transition-all duration-200"
          >
            Workflows
          </Link>
          <Link
            to="/templates"
            className="px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] transition-all duration-200 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Templates
          </Link>
          <Link
            to="/history"
            className="px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] transition-all duration-200 flex items-center gap-2"
          >
            <History className="w-4 h-4" />
            History
          </Link>
          <Link
            to="/recorder"
            className="px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] transition-all duration-200 flex items-center gap-2"
          >
            <Mic className="w-4 h-4" />
            Recorder
          </Link>
          <Link
            to="/playground"
            className="px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#F5F5F7] hover:bg-[#1A1A24] transition-all duration-200 flex items-center gap-2"
          >
            <Beaker className="w-4 h-4" />
            Playground
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
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
      </div>
    </nav>
  );
}
