import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './Navigation.css';

export const LandingNavbar = () => {
  return (
    <nav className="navbar landing-nav glass">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-accent">Vocal</span>Flow
        </Link>
        <div className="nav-links">
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-accent">Vocal</span>Flow
          </Link>
          <p className="footer-desc">AI-powered visual workflow builder for voice processing.</p>
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="#">Features</Link>
            <Link to="#">Integrations</Link>
            <Link to="#">Enterprise</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="#">Docs</Link>
            <Link to="#">API Reference</Link>
            <Link to="#">Status</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="#">About</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Careers</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 VocalFlow Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
