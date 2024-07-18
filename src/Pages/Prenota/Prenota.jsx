import React from "react";
import "./Prenota.css";
import FormPrenotazione from "../../Components/FormPrenotazione/FormPrenotazione";
import { useTranslation } from "react-i18next";

const Prenota = () => {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="background-diagonal"></div>

      <div className="prenotazione-header">
        <h1 className="prenotazione-title">{t("Prenota il tuo tavolo")}</h1>
        <p className="prenotazione-subtitle">
          {t("Goditi un'esperienza culinaria indimenticabile.")}
        </p>
      </div>

      <div className="content-container">
        <div className="shadow-box">
          <div className="box-prenotazione">
            <FormPrenotazione />
          </div>

          <div className="box-posizione-contatti">
            <div className="posizione">
              <h2 className="posizione-title">{t("Posizione & Orari")}</h2>
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9638491722955!2d12.487332515333132!3d41.907570779219616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6050d2ab5c17%3A0xfbf6d3b3e85b3a4a!2sVia%20Sardegna%2C%2039%2C%2000187%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1625395861573!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <h1 className="orari">{t("Orario Continuato")}</h1>
              <p className="orari">
                {t("Aperto tutti i giorni (11:00 - 23:30)")}
              </p>
            </div>
            <hr />
            <div className="contatti">
              <h2 className="contatti-title">{t("Contatti")}</h2>
              <p>
                <i className="bi bi-whatsapp"> +390642013721</i>
              </p>
              <p>
                <i className="bi bi-telephone"> +390642013721</i>
              </p>
              <p>
                <i className="bi bi-envelope"> labruschettae01@gmail.com</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prenota;
