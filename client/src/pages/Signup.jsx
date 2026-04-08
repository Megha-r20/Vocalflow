import { useState } from "react";
import { Mic } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup and navigate to dashboard
    console.log("Signing up with:", { name, email, password });

    // In a real app, you'd get this token from an API response
    const mockToken = "vocalflow_mock_jwt_token_" + Date.now();
    login(mockToken);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      {/* Background Glow */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="auth-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <Mic size={18} />
          </div>
          <span>VocalFlow</span>
        </div>

        {/* CARD */}
        <div className="auth-card">

          <div className="auth-header">
            <h1>Create your account</h1>
            <p>Start building voice workflows today</p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Alex Johnson" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="hint">Must be at least 8 characters</span>
            </div>

            <div className="form-row">
              <label className="checkbox">
                <input type="checkbox" required />
                <span>
                  I agree to the <Link to="#terms">Terms of Service</Link> and <Link to="#privacy">Privacy Policy</Link>
                </span>
              </label>
            </div>

            <button type="submit" className="auth-btn">Create Account</button>

          </form>

          <p className="switch-text">
            Already have an account? <Link to="/login" className="login-link">Sign in</Link>
          </p>

        </div>

        <Link to="/" className="back-home">← Back to home</Link>

      </div>
    </div>
  );
}
