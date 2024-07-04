import React, { useState } from 'react';
import './Azienda.css';

const Azienda = () => {
  const [formData, setFormData] = useState({
    data: '',
    orario: '',
    numeroPersone: 1,
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);

    // Reset the form
    setFormData({
      data: '',
      orario: '',
      numeroPersone: 1,
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
    });
  };

  return (
    <div className="azienda-form-container">
      <h2>Collabora con Noi</h2>
      <h3>Sconti Aziendali</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome Azienda:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Aziendale:</label>
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

        <button type="submit">Contattaci Ora</button>
      </form>
    </div>
  );
};

export default Azienda;
