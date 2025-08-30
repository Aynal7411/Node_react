import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, logout }) => {
  return (
    <nav className="navbar">
      <div className="logo">Aynal Haque</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* Auth Links */}
        {!user && <li><Link to="/register">Register</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}
        {user && <li><button onClick={logout} className="logout-btn">Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
