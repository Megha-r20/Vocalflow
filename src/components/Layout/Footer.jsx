import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(176,48,82,0.15)] bg-[#0B0B10] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-lg flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold text-[#F5F5F7]">VocalFlow</span>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              Build AI voice workflows visually. Design, connect, and deploy intelligent voice pipelines.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#F5F5F7] mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/app" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Workflows
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Playground
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F5F5F7] mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F5F5F7] mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#security" className="text-sm text-[#9CA3AF] hover:text-[#B03052] transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(176,48,82,0.15)] flex items-center justify-between">
          <p className="text-sm text-[#9CA3AF]">
            © 2026 VocalFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1A1A24] hover:bg-[#B03052]/20 border border-[rgba(176,48,82,0.2)] hover:border-[rgba(176,48,82,0.4)] flex items-center justify-center transition-all duration-200 group"
            >
              <Twitter className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#B03052]" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1A1A24] hover:bg-[#B03052]/20 border border-[rgba(176,48,82,0.2)] hover:border-[rgba(176,48,82,0.4)] flex items-center justify-center transition-all duration-200 group"
            >
              <Github className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#B03052]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1A1A24] hover:bg-[#B03052]/20 border border-[rgba(176,48,82,0.2)] hover:border-[rgba(176,48,82,0.4)] flex items-center justify-center transition-all duration-200 group"
            >
              <Linkedin className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#B03052]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
