import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("IT");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const switchLanguage = () => {
    const newLanguage = language === "IT" ? "EN" : "IT";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage.toLowerCase());
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="./logo.png" alt="Logo" />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        <div className={`navbar-menu ${isMobileMenuOpen ? "is-active" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                {i18n.t("Home")}
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={closeMobileMenu}>
                {i18n.t("Menu")}
              </Link>
            </li>
            <li>
              <Link to="/prenota" onClick={closeMobileMenu}>
                {i18n.t("Prenota")}
              </Link>
            </li>
            <li>
              <Link to="/azienda" onClick={closeMobileMenu}>
                {i18n.t("Collabora con Noi")}
              </Link>
            </li>
          </ul>
          <button className="language-switch" onClick={switchLanguage}>
            <img
              src={language === "IT" ? "./italy.jpg" : "./united_kingdom.jpg"}
              alt={language === "IT" ? "Italian Flag" : "UK Flag"}
              className="flag-icon"
            />
            {language}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="overlay" onClick={toggleMobileMenu}></div>
      )}
      <div className="content-padding"></div>{" "}
      {/* Aggiungi questo div per il padding */}
    </>
  );
};

export default Navbar;
