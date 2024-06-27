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

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="./logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? "is-active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/">{i18n.t("Home")}</Link>
          </li>
          <li>
            <Link to="/menu">{i18n.t("Menu")}</Link>
          </li>
          <li>
            <Link to="/prenota">{i18n.t("Prenota")}</Link>
          </li>
        </ul>
        <button className="language-switch" onClick={switchLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
