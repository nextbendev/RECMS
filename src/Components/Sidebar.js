import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  useEffect(() => {
    const sidebarMenu = document.getElementById('sidebarMenu');

    if (sidebarMenu) {
      // Add event listener to all links to close the menu on click
      const links = sidebarMenu.querySelectorAll('.nav-link');
      const bootstrap = require('bootstrap'); // Import Bootstrap's JS API
      const collapseInstance = bootstrap.Collapse.getInstance(sidebarMenu) || new bootstrap.Collapse(sidebarMenu, { toggle: false });

      const handleLinkClick = () => {
        if (collapseInstance) {
          collapseInstance.hide(); // Close the menu
        }
      };

      links.forEach(link => link.addEventListener('click', handleLinkClick));

      return () => {
        // Cleanup event listeners on unmount
        links.forEach(link => link.removeEventListener('click', handleLinkClick));
      };
    }
  }, []);

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feed">
              News Feed
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mailbox">
              Mailbox
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/messages">
              Messenger
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allListings">
              Listings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myListings">
              My Listings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">
              Tasks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">
              Input
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myProfile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
