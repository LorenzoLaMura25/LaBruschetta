import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa il file CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        MyBrand
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/prenota">Prenota</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
