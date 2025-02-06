import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const sidebarMenu = document.getElementById('sidebarMenu');

    if (sidebarMenu) {
      const links = sidebarMenu.querySelectorAll('.nav-link');
      
      const handleLinkClick = () => {
        if (sidebarMenu.classList.contains('show')) {
          sidebarMenu.classList.remove('show'); // Close sidebar when a link is clicked
        }
      };

      links.forEach(link => link.addEventListener('click', handleLinkClick));

      return () => {
        links.forEach(link => link.removeEventListener('click', handleLinkClick));
      };
    }

    // ✅ Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feed">News Feed</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mailbox">Mailbox</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/messages">Messenger</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bulletinBoard">Bulletin Board</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">Contacts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allListings">Listings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myListings">My Listings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">Tasks</Link>
          </li>

          {/* ✅ Custom Functional Input Dropdown Without Bootstrap */}
          <li className="nav-item dropdown" ref={dropdownRef}>
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Input
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu show">
                <li><Link className="dropdown-item" to="/form" state={{ role: 'contact' }}>Contact</Link></li>
                <li><Link className="dropdown-item" to="/form" state={{ role: 'lead' }}>Lead</Link></li>
                <li><Link className="dropdown-item" to="/form" state={{ role: 're' }}>Listing</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/myProfile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
