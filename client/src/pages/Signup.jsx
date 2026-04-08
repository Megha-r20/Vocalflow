import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Sparkles } from 'lucide-react';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card glass-card animate-fade-in">
        <h2 className="mb-4">Get Started</h2>
        <p className="mb-6 text-muted">Join Vocalflow and start transforming your voice into actionable flows.</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4 text-left">
            <label htmlFor="fullname">Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="text" id="fullname" placeholder="John Doe" style={{ paddingLeft: '44px' }} required />
            </div>
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="email">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="email" id="email" placeholder="name@company.com" style={{ paddingLeft: '44px' }} required />
            </div>
          </div>

          <div className="mb-6 text-left">
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="password" id="password" placeholder="••••••••" style={{ paddingLeft: '44px' }} required />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Sparkles size={20} />
            Create Account
          </button>
        </form>

        <p className="mt-6" style={{ marginTop: '24px', fontSize: '0.9rem', color: '#94a3b8' }}>
          Already have an account? <Link to="/login" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: '600' }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
