import { useState } from "react";
import { Mic } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and navigate to dashboard
    console.log("Logging in with:", { email, password });
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      
      {/* Background Glow */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="login-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <Mic size={18} />
          </div>
          <span>VocalFlow</span>
        </div>

        {/* Card */}
        <div className="login-card">

          <div className="login-header">
            <h1>Welcome back</h1>
            <p>Sign in to your account</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>

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
            </div>

            <div className="form-row">
              <label className="checkbox">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="forgot">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Sign In</button>

          </form>

          <p className="signup-text">
            Don’t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>

        </div>

        <Link to="/" className="back-home">← Back to home</Link>

      </div>
    </div>
  );
}
