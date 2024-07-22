import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("it");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const switchLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const getFlagSrc = (lang) => {
    switch (lang) {
      case "it":
        return "imgs/flags/italy.png";
      case "en":
        return "imgs/flags/united-kingdom.png";
      case "ch":
        return "imgs/flags/china.png";
      case "de":
        return "imgs/flags/germany.png";
      default:
        return "imgs/flags/italy.png";
    }
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
            <img
              src={getFlagSrc(language)}
              alt="Current Language Flag"
              className={`flag-icon ${isLanguageDropdownOpen ? "active" : ""}`}
              onClick={toggleLanguageDropdown}
            />
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                {["it", "en", "ch", "de"]
                  .filter((lang) => lang !== language)
                  .map((lang) => (
                    <img
                      key={lang}
                      src={getFlagSrc(lang)}
                      alt={`${lang} Flag`}
                      className="flag-icon small"
                      onClick={() => switchLanguage(lang)}
                    />
                  ))}
              </div>
            )}
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
