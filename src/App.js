// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Prenota from './Pages/Prenota/Prenota';
import './i18n'; // Importa la configurazione di i18n

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/prenota" element={<Prenota />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
