import React from 'react';
import './Menu.css'; // Importa il file CSS per lo stile

const menuItems = {
  'Le Bruschette': [
    { name: "Aglio e Olio Evo", price: "€2.80" },
    { name: "Pomodoro", price: "€6.00" },
    { name: "Pomodoro e Mozzarella", price: "€6.90" },
    { name: "Pomodoro e rucola", price: "€6.80" },
    { name: "Salmone e Mozzarella", price: "€7.80" },
    { name: "Burrata e Pomodori Secchi", price: "€7.80" }
  ],
  'Le Pizze': [
    { name: "Margherita", price: "€10.50" },
    { name: "Marinara", price: "€7.00" },
    { name: "Funghi", price: "€12.50" },
    { name: "4 Formaggi", price: "€13.50" },
    { name: "Salsiccia", price: "€13.00" },
    { name: "Patate e Salsiccia", price: "€13.50" },
    { name: "Salame Piccante", price: "€13.50" },
    { name: "Napoli con Acciughe di Prima Qualità", price: "€12.50" },
    { name: "Verdure Miste", price: "€13.00" },
    { name: "Capricciosa", price: "€13.50" },
    { name: "Prosciutto di Parma di prima Qualità", price: "€13.00" },
    { name: "Prosciutto e Funghi", price: "€13.50" },
    { name: "Speck, Provola e Zucchine", price: "€13.00" },
    { name: "Bufala e Pomodorini", price: "€13.50" },
    { name: "Burrata con Pomodori Secchi e Basilico", price: "€13.50" },
    { name: "Fiori di Zucca e Alici", price: "€13.00" },
    { name: "Boscaiola-pomodoro, mozzarella,funghi e salsiccia", price: "€13.90" },
    { name: "Pizza Crostino Prosciutto Cotto e Mozzarella", price: "€13.00" },
    { name: "Tonno e Cipolla", price: "€13.00" },
    { name: "Gorgonzola e Cipolla", price: "€13.00" },
    { name: "Focaccia Olio Evo e Rosmarino", price: "€5.00" }
  ],
  'I Calzoni': [
    { name: "Prosciutto Cotto e Mozzarella", price: "€13.00" },
    { name: "Verdure,Pomodoro e Mozzarella", price: "€12.50" },
    { name: "Funghi,Pomodoro e Mozzarella", price: "€12.50" },
    { name: "Calzone Romano", price: "€13.50" }
  ],
  "La Nostra Pasta all' uovo Tirata a Mano": [
    { name: "Tagliolini al Pesto", price: "€14.50" },
    { name: "Tagliolini Calamari e Pomodorini", price: "€16.00" },
    { name: "Tagliolini Salmone,Fiori di Zucca e Pomodorini", price: "€15.50" },
    { name: "Strozzapreti Acqua e Farina all'Amatriciana", price: "€15.00" },
    { name: "Tonnarelli Acqua e Farina alla Carbonara con Pepe Rosa", price: "€14.50" },
    { name: "Tonnarelli Acqua e Farina Cacio e Pepe", price: "€14.50" },
    { name: "Tonnarelli alle Vongole Veraci", price: "€16.00" },
    { name: "Fettuccine Pomodorini Freschi e Basilico", price: "€14.50" },
    { name: "Fettuccine al Ragù", price: "€15.60" },
    { name: "Fettuccine all'Alfredo", price: "€15.00" },
    { name: "Gnocchi al Gorgonzola", price: "€13.60" },
    { name: "Gnocchi Pomodoro e Basilico", price: "€12.50" },
    { name: "Ravioli di Ricotta e Spinaci con Burro e Salvia", price: "€16.00" },
    { name: "Cannelloni di Vitella al Forno a Legna", price: "€15.60" },
    { name: "Lasagna al Frono a Legna", price: "€15.60" },
    { name: "Tortellini di Brodo di Cappone", price: "€15.50" }
  ],
  'Le zuppe': [
    { name: "Zuppa di verdure", price: "€8.00" },
    { name: "Zuppa di Legumi", price: "€13.00" },
    { name: "Maltagliati e Fagioli", price: "€13.50" }
  ],
  'Le carni': [
    { name: "Piccata di Vitella al Limone", price: "€17.60" },
    { name: "Saltimbocca di Vitella alla Romana", price: "€18.60" },
    { name: "Tagliata di Manzo Qualità Sakura Yoza", price: "€22.50" },
    { name: "Tagliata di Pollo", price: "€15.00" },
    { name: "Abbacchio Arrosto al Forno a Legna con Patate", price: "€22.00" },
    { name: "Stinco di Vitella al Forno a Legna con purea di Patate", price: "€21.00" },
    { name: "Polpette al sugo", price: "€16.90" }
  ],
  'Il Pesce': [
    { name: "Salutè di Vongole Veraci", price: "€16.00" },
    { name: "Spigola con Pomodorini,Patate e Olive", price: "€21.00" },
    { name: "Calamari Freschi Pescati e Fritti", price: "€23.00" }
  ],
  'I Fritti': [
    { name: "Un Fiore di Zucca", price: "€3.50" },
    { name: "10 Olive Ascolane Riempite a Mano", price: "€9.60" },
    { name: "Fritto Misto di Verdure", price: "€9.60" },
    { name: "Patate Fritte Tagliate a Mano", price: "€6.80" },
    { name: "Calamari Freschi Pescati e Fritti", price: "€23.00" }
  ],
  'Gli affettati': [
    { name: "Prosciutto di Parma di Prima Qualità", price: "€13.00" },
    { name: "Prosciutto di Parma di Prima Qualità e Mozzarella di Bufala", price: "€16.00" },
    { name: "Bresaola e Rucola", price: "€13.50" }
  ],
  'Le verdure': [
    { name: "Cicoria Ripassata", price: "€6.60" },
    { name: "Spinaci Ripassati Burro e Parmigiano 30 Mesi", price: "€6.80" },
    { name: "Parmigiana di Melanzane", price: "€11.50" },
    { name: "Carciofo alla Romana", price: "€6.00" },
    { name: "Tiella Gaetana", price: "€8.00" },
    { name: "Zucchine Romanesche alla Griglia", price: "€6.60" }
  ],
  'Le Insalate': [
    { name: "Verde", price: "€6.60" },
    { name: "Mista", price: "€7.00" },
    { name: "Caprese con Mozzarella di Bufala", price: "€10.00" },
    { name: "Tonno e Cipolla Rossa", price: "€10.00" }
  ],
  'Patate Sotto la Cenere': [
    { name: "Al Burro", price: "€6.90" },
    { name: "Asiago e Funghi", price: "€13.00" },
    { name: "Radicchio e Gorgonzola", price: "€13.00" },
    { name: "Speck e Provola", price: "€13.00" },
    { name: "Brie,Pomodorini e Prosciutto", price: "€13.50" }
  ],
  'I Crostini': [
    { name: "Alici di Prima Qualità e Mozzarella", price: "€13.00" },
    { name: "Prosciutto di Parma di Prima Qualità e Mozzarella", price: "€13.00" }
  ],
  'I Nostri Dolci Artigianali': [
    { name: "Tiramisù", price: "€7.60" },
    { name: "Cannolo Siciliano", price: "€7.60" },
    { name: "Cream Caramel", price: "€7.60" },
    { name: "Cheese Cake", price: "€7.60" },
    { name: "Torta di Mele", price: "€7.60" },
    { name: "Sacher con Panna", price: "€7.60" },
    { name: "Coppa al Cioccolato Pan di Stelle", price: "€7.60" },
    { name: "Coppa al Cioccolato con Granella di Nocciole", price: "€7.60" },
    { name: "Crostata con Crema Pasticciera e Frutti di Bosco", price: "€7.60" },
    { name: "Crema al Limone con Savoiardi al Limoncello e Meringa Morbida", price: "€7.60" },
    { name: "Focaccia con la Nutella", price: "€11.00" },
    { name: "Gelato (crema,cioccolato,nocciola,pistacchio,fragola,limone)", price: "€7.60" }
  ],
  'I Formaggi': [
    { name: "Mozzarella di Bufala", price: "€7.70" },
    { name: "Parmiggiano Reggiano 30 Mesi", price: "€8.00" },
    { name: "Burrata con Pomodori Secchi e Basilico", price: "€12.00" },
    { name: "Misto di Formaggi", price: "€13.00" },
    { name: "Scamorza,Prosciutto e Funghi Cotti nel Forno a Legna", price: "€13.00" }
  ],
  'La Frutta': [
    { name: "Ananas", price: "€6.60" },
    { name: "Macedonia", price: "€6.60" },
    { name: "Melone", price: "€6.60" },
    { name: "Frutti di Bosco", price: "€7.60" }
  ],
  'La Caffetteria': [
    { name: "Caffè Espresso 100% Arabica", price: "€2.60" },
    { name: "Thè", price: "€2.60" },
    { name: "Cappuccino", price: "€3.60" },
    { name: "Cioccolata Calda con Panna", price: "€5.00" },
    { name: "Pane per Persona", price: "€2.10" },
  ]
};

const Menu = () => {
  return (
    <div className="menu">
      {Object.keys(menuItems).map(section => (
        <div key={section} className="menu-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <ul>
            {menuItems[section].map(item => (
              <li key={item.name}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
       <div className="menu-footer">
        <p><strong>Nota:</strong> Il servizio è del 12%.</p>
        <p>Nei nostri piatti possono essere presenti allergeni.</p>
        <p>Non utilizziamo ingredienti congelati.</p>
      </div>
    </div>
    
  );
}

export default Menu;
