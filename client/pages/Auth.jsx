import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { Mail, Lock, User as UserIcon, Github } from 'lucide-react';

import './Auth.css';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-page container">
      <Card className="auth-card glass">
        <div className="auth-header">
          <Link to="/" className="logo"><span className="logo-accent">V</span>F</Link>
          <h2>Welcome back</h2>
          <p>Enter your credentials to access your account.</p>
        </div>
        
        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <Input label="Email address" type="email" placeholder="name@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <div className="auth-actions">
            <Link to="#" className="forgot-link">Forgot password?</Link>
          </div>
          <Button variant="primary" style={{ width: '100%', marginTop: '16px' }}>Sign In</Button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-auth">
          <Button variant="secondary" style={{ width: '100%', icon: Github }}>GitHub</Button>
        </div>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </Card>
    </div>
  );
};

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-page container">
      <Card className="auth-card glass">
        <div className="auth-header">
          <Link to="/" className="logo"><span className="logo-accent">V</span>F</Link>
          <h2>Create an account</h2>
          <p>Get started with VocalFlow today.</p>
        </div>
        
        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <Input label="Full Name" type="text" placeholder="John Doe" />
          <Input label="Email address" type="email" placeholder="name@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Button variant="primary" style={{ width: '100%', marginTop: '16px' }}>Sign Up</Button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-auth">
          <Button variant="secondary" style={{ width: '100%', icon: Github }}>GitHub</Button>
        </div>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Card>
    </div>
  );
};
