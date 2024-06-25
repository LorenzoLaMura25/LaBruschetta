// src/Pages/Menu/Menu.jsx
import React from 'react';
import './Menu.css'; // Importa il file CSS per lo stile

const menuItems = {
  bruschette: ["Aglio e Olio Evo", "Pomodoro","Pomodoro e Mozzarella","Pomodoro e rucola","Salmone e Mozzarella","Burrata e Pomodori Secchi"],
  pizze: ["Margherita", "Marinara", "Funghi","4 Formaggi","Salsiccia",
"Patate e Salsiccia","Salame Piccante","Napoli con Acciughe di Prima Qualità",
"Verdure Miste","Capricciosa","Prosciutto di Parma di prima Qualita","Prosciutto e Funghi",
"Speck,Provola e Zucchine","Bufala e Pomodorini","Burrata con Pomodori Secchi e Basilico",
"Fiori di Zucca e Alici","Boscaiola-pomodoro, mozzarella,funghi e salsiccia","Pizza Crostino Prosciutto Cotto e Mozzarella",
"Tonno e Cipolla","Gorgonzola e Cipolla","Focaccia Olio Evo e Rosmarino"],
  calzoni: ["Prosciutto Cotto e Mozzarella", "Verdure,Pomodoro e Mozzarella",
    "Funghi,Pomodoro e Mozzarella","Calzone Romano"
  ],
  primi: ["Tagliolini al Pesto", "Tagliolini Calamari e Pomodorini",
    "Tagliolini Salmone,Fiori di Zucca e Pomodorini","Strozzapreti Acqua e Farina all'Amatriciana",
    "Tonnarelli Acqua e Farina Cacio e Pepe","Tonnarelli alle Vongole Veraci",
    "Fettuccine Pomodorini Freschi e Basilico","Fettuccine al Ragù","Fettuccine all'Alfredo",
    "Gnocchi al Gorgonzola","Gnocchi Pomodoro e Basilico","Ravioli di Ricotta e Spinaci con Burro e Salvia",
    "Cannelloni di Vitella al Forno a Legna","Lasagna al Frono a Legna","Tortellini di Brodo di Cappone"
  ],
  zuppe: ["Zuppa di verdure", "Zuppa di Legumi","Maltagliati e Fagioli"],
  carni: ["Piccata di Vitella al Limone", "Saltimbocca di Vitella alla Romana",
    "Tagliata di Manzo Qualità Sakura Yoza","Tagliata di Pollo","Abbacchio Aroosto al Forno a Legna con Patate",
    "Stinco di Vitella al Forno a Legna con purea di Patate","Polpette al sugo"
  ],
  pesce: ["Salutè di Vongole Veraci", "Spigola con Pomodorini,Patate e Olive","Calamari Freschi Pescati e Fritti"],
  fritti: ["Un Fiore di Zucca", "10 Olive Ascolane Riempite a Mano","Fritto Misto di Verdure",
    "Patate Fritte Tagliate a Mano","Calamari Freschi Pescati e Fritti"
  ],
  affettati: ["Prosciutto di Parma di Prima Qualità", "Prosciutto di Parma di Prima Qualità e Mozzarella di Bufala","Bresaola e Rucola"
  ],
  verdure: ["Cicoria Ripassata", "Spinaci Ripassati Burro e Parmigiano 30 Mesi",
    "Parmigiana di Melanzane","Carciofo alla Romana","Tiella Gaetana","Zucchine Romanesche alla Griglia"
  ],
  insalate: ["Verde", "Mista","Caprese con Mozzarella di Bufala","Tonno e Cipolla Rossa"],
  patate: ["Al Burro","Asiago e Funghi","Radicchio e Gorgonzola","Speck e Provola","Brie,Pomodorini e Prosciutto"],
  crostini: ["Alici di Prima Qualità e Mozzarella", "Prosciutto di Parma di Prima Qualità e Mozzarella"],
  dolci: ["Tiramisù", "Cannolo Siciliano","Cream Caramel","Cheese Cake","Torta di Mele",
    "Sacher con Panna","Coppa al Cioccolato Pan di Stelle","Coppa al Cioccolato con Granella di Nocciole",
    "Crostata con Crema Pasticciera e Frutti di Bosco","Crema al Limone con Savoiardi al Limoncello e Meringa Morbida",
    "Focaccia con la Nutella","Gelato (crema,cioccolato,nocciola,pistacchio,fragola,limone)"
  ],
  formaggi: ["Mozzarella di Bufala", "Parmiggiano Reggiano 30 Mesi",
    "Burrata con Pomodori Secchi e Basilico","Misto di Formaggi","Scamorza,Prosciutto e Funghi Cotti nel Forno a Legna"
  ],
  frutta: ["Ananas", "Macedonia","Melone","Frutti di Bosco"],
  caffe: ["Caffè Espresso 100% Arabica", "Thè","Cappuccino","Cioccolata Calda con Panna","Pane per Persona","Servizio 12%"]
};

const Menu = () => {
  return (
    <div className="menu">
      {Object.keys(menuItems).map(section => (
        <div key={section} className="menu-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <ul>
            {menuItems[section].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Menu;
