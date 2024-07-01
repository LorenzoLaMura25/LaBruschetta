// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Prenota from "./Pages/Prenota/Prenota";
import Privacy from "./Pages/Privacy/Privacy.jsx";
import "./i18n"; // Importa la configurazione di i18n
import Footer from "./Components/Footer/Footer.jsx";

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/menu"
            element={
              <Layout>
                <Menu />
              </Layout>
            }
          />
          <Route
            path="/prenota"
            element={
              // <Layout>
              <Prenota />
              // </Layout>
            }
          />
          <Route 
            path="/privacy" 
            element={
              <Layout>
                <Privacy/>
              </Layout>
            } 
          />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
