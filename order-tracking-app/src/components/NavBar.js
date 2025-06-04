// Navbar.js
import React from 'react';
import './NavBar.js'; // Assuming you have a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📦 Order Tracker</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/orders">Orders</a></li>
        <li><a href="/customers">Customers</a></li>
        <li className="dropdown">
          <button type="button" className="dropdown-toggle">Settings ⮟</button>
          <ul className="dropdown-menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
