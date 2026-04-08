import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card glass-card animate-fade-in">
        <h2 className="mb-4">Welcome Back</h2>
        <p className="mb-6 text-muted">Enter your credentials to access your flow workspace.</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
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

          <button type="submit" className="btn-primary w-full" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <LogIn size={20} />
            Sign In
          </button>
        </form>

        <p className="mt-6" style={{ marginTop: '24px', fontSize: '0.9rem', color: '#94a3b8' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: '600' }}>Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
