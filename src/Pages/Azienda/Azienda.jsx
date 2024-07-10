import React, { useState } from "react";
import "./Azienda.css";

const FormPrenotazione = () => {
  const [formData, setFormData] = useState({
    data: "",
    orario: "",
    numeroPersone: 1,
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);

    // Reset the form
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

    <>
    <div className="background-diagonal-azienda"></div>
    <div className="azienda-form-container">
      <h2>Form di Prenotazione Azienda</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="data">Scegli la data:</label>
        <input
          type="date"
          id="data"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
        />

        <label htmlFor="orario">Scegli l'orario:</label>
        <input
          type="time"
          id="orario"
          name="orario"
          value={formData.orario}
          onChange={handleChange}
          required
        />

        <label htmlFor="numeroPersone">Numero di Dipendenti:</label>
        <input
          type="number"
          id="numeroPersone"
          name="numeroPersone"
          min="1"
          value={formData.numeroPersone}
          onChange={handleChange}
          required
        />

        <label htmlFor="nome">Nome Azienda:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Telefono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
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
