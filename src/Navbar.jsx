import React from 'react';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">Welcome to Mern Stack</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/home">Home</a>
              <a class="nav-item nav-link" href="/login">Login</a>
              <a class="nav-item nav-link" href="/register">Signup</a>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;