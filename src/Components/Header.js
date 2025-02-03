import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      {/* Brand Name */}
      <Link
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 d-flex align-items-center"
        to="/"
      >
        Property Pulse
      </Link>

      {/* Hamburger Menu */}
      <button
        className="navbar-toggler d-md-none me-3" // Margin to separate from sign-in button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Sign-In Button */}
      <div className="navbar-nav ms-auto pe-3"> {/* Push to the right */}
        <div className="nav-item text-nowrap">
          <Link className="nav-link px-3" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
