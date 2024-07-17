import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Prenota from "./Pages/Prenota/Prenota";
import Privacy from "./Pages/Privacy/Privacy.jsx";
import Azienda from "./Pages/Azienda/Azienda.jsx";
import "./i18n"; // Importa la configurazione di i18n
import Footer from "./Components/Footer/Footer.jsx";
import Scroll from "./Components/Scroll/Scroll.jsx";
import "./App.css";

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
      <Scroll />
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
              <Layout>
                <Prenota />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/azienda"
            element={
              <Layout>
                <Azienda />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
