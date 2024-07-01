import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="logo.png" alt="Logo" className="footer-logo" />
        <p>
          La passione e la dedizione per la cucina hanno reso il ristorante
          luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto
          alta la tradizione di nonno Andrea.
        </p>
      </div>
      <div className="footer-middle">
        <div className="contact-info">
          <h2>Contatti</h2>
          <p>
            <i className="bi bi-whatsapp"> +390642013721</i>
          </p>
          <p>
            <i className="bi bi-telephone"> +390642013721</i>
          </p>
          <p>
            <i className="bi bi-envelope"></i> ciao@labruschettaroma.com
          </p>
        </div>
        <div className="map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9638491722955!2d12.487332515333132!3d41.907570779219616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6050d2ab5c17%3A0xfbf6d3b3e85b3a4a!2sVia%20Sardegna%2C%2039%2C%2000187%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1625395861573!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="social-media">
          <h2>Seguici su</h2>
          <div className="social-icons">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-tripadvisor"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} La Bruschetta e...</p>
        <p>
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
