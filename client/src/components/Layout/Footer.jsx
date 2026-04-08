import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Globe, 
  Send, 
  ExternalLink, 
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#050508] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#B03052]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.2)]">
                <Mic className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-[#F5F5F7] text-xl tracking-tight">VocalFlow</span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Next-generation AI voice orchestration. Design, connect, and deploy intelligent voice pipelines with our visual no-code builder.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Globe className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Send className="w-5 h-5" />} />
              <SocialLink href="#" icon={<ExternalLink className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4">
              <FooterLink to="/dashboard">Dashboard</FooterLink>
              <FooterLink to="/app">Visual Builder</FooterLink>
              <FooterLink to="/templates">Templates</FooterLink>
              <FooterLink to="/history">Execution History</FooterLink>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/api">API Reference</FooterLink>
              <FooterLink to="/changelog">Changelog</FooterLink>
              <FooterLink to="/roadmap">Roadmap</FooterLink>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Stay Updated</h4>
            <p className="text-[#9CA3AF] text-sm mb-6">
              Get the latest updates on AI voice orchestration.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#12121A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B03052]/50 transition-all"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-[#B03052] text-white rounded-lg hover:bg-[#D76C82] transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#9CA3AF] text-xs">
            © {currentYear} VocalFlow AI. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-[#9CA3AF] hover:text-[#B03052] text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[#9CA3AF] hover:text-[#B03052] text-xs transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-[#9CA3AF] hover:text-[#B03052] text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-[#9CA3AF] hover:text-[#B03052] text-sm transition-all duration-300 hover:translate-x-1 inline-block">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#12121A] border border-white/10 text-[#9CA3AF] hover:text-white hover:border-[#B03052]/50 hover:bg-[#B03052]/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
