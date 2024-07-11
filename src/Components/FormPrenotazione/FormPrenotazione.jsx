import React, { useState } from "react";
import useWhatsAppLink from "../../hooks/useWhatsappLink";
import { useTranslation } from 'react-i18next';
import "./FormPrenotazione.css";

const FormPrenotazione = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    data: "",
    orario: "",
    numeroPersone: 1,
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
  });

  const generateWhatsAppLink = useWhatsAppLink();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);

    const whatsappLink = generateWhatsAppLink(formData);
    window.location.href = whatsappLink;

    setFormData({
      data: "",
      orario: "",
      numeroPersone: 1,
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
    });
  };

  return (
    <div className="form-completo">
      <h2>{t('Form di Prenotazione')}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="data">{t('Scegli la data')}:</label>
        <input
          type="date"
          id="data"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
        />

        <label htmlFor="orario">{t('Scegli l\'orario')}:</label>
        <input
          type="time"
          id="orario"
          name="orario"
          value={formData.orario}
          onChange={handleChange}
          required
        />

        <label htmlFor="numeroPersone">{t('Numero di persone')}:</label>
        <input
          type="number"
          id="numeroPersone"
          name="numeroPersone"
          min="1"
          value={formData.numeroPersone}
          onChange={handleChange}
          required
        />

        <label htmlFor="nome">{t('Nome')}:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="cognome">{t('Cognome')}:</label>
        <input
          type="text"
          id="cognome"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">{t('Telefono')}:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <button type="submit">{t('Prenota')}</button>
      </form>
    </div>
  );
};

export default FormPrenotazione;
