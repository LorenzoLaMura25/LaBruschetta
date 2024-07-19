import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("it");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const switchLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="imgs/logo.png" alt="Logo" />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <div className={`navbar-menu ${isMobileMenuOpen ? "is-active" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={closeMobileMenu}>
                {t("Menu")}
              </Link>
            </li>
            <li>
              <Link to="/prenota" onClick={closeMobileMenu}>
                {t("Prenota")}
              </Link>
            </li>
            <li>
              <Link to="/azienda" onClick={closeMobileMenu}>
                {t("Collabora con Noi")}
              </Link>
            </li>
          </ul>
          <div className="language-switch">
            <select
              value={language}
              onChange={(e) => switchLanguage(e.target.value)}
            >
              <option value="it">
                <span>Italiano</span>
              </option>
              <option value="en">
                <span>English</span>
              </option>
              <option value="ch">
                <span>Chinese</span>
              </option>
              <option value="de">
                <span>Deutsch</span>
              </option>
            </select>
          </div>
          <div>
            {(language === "it" && (
              <img
                src="imgs/italy.jpg"
                alt="Italian Flag"
                className="flag-icon"
              />
            )) ||
              (language === "en" && (
                <img
                  src="imgs/united_kingdom.jpg"
                  alt="UK Flag"
                  className="flag-icon"
                />
              )) ||
              (language === "ch" && (
                <img
                  src="imgs/china.jpg"
                  alt="Chinese Flag"
                  className="flag-icon"
                />
              )) ||
              (language === "de" && (
                <img
                  src="imgs/germany.jpg"
                  alt="Germany Flag"
                  className="flag-icon"
                />
              ))}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="overlay" onClick={toggleMobileMenu}></div>
      )}
      <div className="content-padding"></div>
    </>
  );
};

export default Navbar;
