import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa il file CSS

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('IT');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://cdn.discordapp.com/attachments/1254742055637352559/1255439082817851413/logo.png?ex=667d2242&is=667bd0c2&hm=3c463acb5b0c3ede600af65297824d39135952e4e4bb91383b876b6c2deb5fa7&" alt="Logo" />
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/prenota">Prenota</Link></li>
        </ul>
        <div className="language-toggle" onClick={toggleLanguageDropdown}>
          {language}
          <div className={`dropdown-menu ${isLanguageDropdownOpen ? 'is-active' : ''}`}>
            <button onClick={() => changeLanguage('IT')}>IT</button>
            <button onClick={() => changeLanguage('ENG')}>ENG</button>
          </div>
        </div>
      </div>
      <button className="navbar-burger" onClick={toggleMobileMenu}>
        &#9776;
      </button>
    </nav>
  );
}

export default Navbar;
