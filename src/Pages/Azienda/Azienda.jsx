import React, { useState } from "react";
import useWhatsAppLinkAziende from "../../hooks/useWhatsappLinkAziende";
import { useTranslation } from "react-i18next";
import "./Azienda.css";

const FormPrenotazione = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nomeAzienda: "",
    orarioPranzo: "",
    numeroDipendentiSettimanali: 1,
    emailAzienda: "",
    telefonoAzienda: "",
  });

  const generateWhatsAppLink = useWhatsAppLinkAziende();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form data:", formData);

    const whatsappLink = generateWhatsAppLink(formData);
    window.location.href = whatsappLink;

    // Reset the form
    setFormData({
      nomeAzienda: "",
      orarioPranzo: "",
      numeroDipendentiSettimanali: 1,
      emailAzienda: "",
      telefonoAzienda: "",
    });
  };

  return (
    <>
      <div className="background-diagonal-azienda"></div>
      <div className="azienda-form-container">
        <h2>Form di Prenotazione Azienda</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nomeAzienda">Nome Azienda:</label>
          <input
            type="text"
            id="nomeAzienda"
            name="nomeAzienda"
            value={formData.nomeAzienda}
            onChange={handleChange}
            required
          />

          <label htmlFor="orarioPranzo">Orario di pranzo:</label>
          <input
            type="time"
            id="orarioPranzo"
            name="orarioPranzo"
            value={formData.orarioPranzo}
            onChange={handleChange}
            required
          />

          <label htmlFor="numeroDipendentiSettimanali">
            Numero di Dipendenti a settimana:
          </label>
          <input
            type="number"
            id="numeroDipendentiSettimanali"
            name="numeroDipendentiSettimanali"
            min="1"
            value={formData.numeroDipendentiSettimanali}
            onChange={handleChange}
            required
          />

          <label htmlFor="emailAzienda">Email:</label>
          <input
            type="email"
            id="emailAzienda"
            name="emailAzienda"
            value={formData.emailAzienda}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefonoAzienda">Telefono:</label>
          <input
            type="tel"
            id="telefonoAzienda"
            name="telefonoAzienda"
            value={formData.telefonoAzienda}
            onChange={handleChange}
            required
          />

          <button type="submit">Contattaci</button>
        </form>
      </div>
    </>
  );
};

export default FormPrenotazione;
