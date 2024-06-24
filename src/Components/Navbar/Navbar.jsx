import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa il file CSS

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        La Bruschetta
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/prenota">Prenota</Link></li>
        </ul>
      </div>
      <button className="navbar-burger" onClick={toggleMobileMenu}>
        &#9776;
      </button>
    </nav>
  );
}

export default Navbar;
