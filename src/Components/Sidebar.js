// src/Components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              <span data-feather="home" className="align-text-bottom"></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myListings">
              <span data-feather="file" className="align-text-bottom"></span>
              My Listings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allListings">
              <span data-feather="file" className="align-text-bottom"></span>
              Listings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              <span data-feather="file" className="align-text-bottom"></span>
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/prospects">
              <span data-feather="file" className="align-text-bottom"></span>
              Prospects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">
              <span data-feather="file" className="align-text-bottom"></span>
              Tasks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Input 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
