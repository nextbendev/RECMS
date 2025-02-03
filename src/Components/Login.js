import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Stylesheets/Login.css";

function SplitLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted with email:", email);
    // Add your login logic here
  };

  return (
    <div className="split-login-container">
      <div className="split-left">
        <div className="intro-section">
          <h1>Welcome to Property Pulse</h1>
          <p>
            Manage your listings, contacts, and tasks all in one place. Access
            market trends, track leads, and communicate with your clients
            effortlessly.
          </p>
          <ul>
            <li>✓ Organize your properties</li>
            <li>✓ Monitor performance trends</li>
            <li>✓ Keep in touch with your clients</li>
          </ul>
        </div>
      </div>
      <div className="split-right">
        <div className="login-card">
          <h3 className="text-center">Sign In</h3>
          <p className="text-muted text-center">Access your dashboard</p>

          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <span className="input-icon"><FaLock /></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          {/* Register Link */}
          <p className="text-center mt-3">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SplitLogin;
