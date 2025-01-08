import React from "react";
import "../styles/Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">For You</a></li>
        <li><a href="#" className="navbar-link">Explore</a></li>
        <li><a href="#" className="navbar-link">My Profile</a></li>
        <li><a href="#" className="navbar-link">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
