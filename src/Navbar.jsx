import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link to="/" className="navbar-brand">Welcome to Mern Stack</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
            <Link to="/home" className="nav-item nav-link">Home</Link>
            <Link to="/login" className="nav-item nav-link">Login</Link>
            <Link to="/register" className="nav-item nav-link">Signup</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;