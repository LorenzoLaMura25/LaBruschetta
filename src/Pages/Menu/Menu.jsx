import React, { useState, useEffect ,useRef} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Menu.css';
import { useTranslation } from 'react-i18next';

const menuCategories = {
  Ristorante: {
    'Le Bruschette': [
      { name: "Aglio e Olio Evo", price: "€2.80" },
      { name: "Pomodoro", price: "€6.00" },
      { name: "Pomodoro e Mozzarella", price: "€6.90" },
      { name: "Pomodoro e rucola", price: "€6.80" },
      { name: "Salmone e Mozzarella", price: "€7.80" },
      { name: "Burrata e Pomodori Secchi", price: "€7.80" }
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
      { name: "Pane per Persona", price: "€2.10" }
    ]
  },
  Pizzeria: {
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
    ]
  },
  Cantina: {
    'Le Bevande': [
      { name: "Acqua Minerale Naturale o con Gas 0.75 lt", price: "€4.60" },
      { name: "Lattine (Coca Cola - Zero - Sprite - Fanta - Chinotto - Lemon Tea - Peach Tea) 0.33 lt", price: "€4.60" }
    ],
    'Vino Bianco': [
      { name: "Vino Bianco 1/4 lt - House White Wine", price: "€7.50" },
      { name: "Vino Bianco 1/2 lt - House White Wine", price: "€12.50" },
      { name: "Vino Bianco 1 lt - House White Wine", price: "€19.00" },
      { name: "Pinot Grigio 0.375 lt", price: "€15.00" },
      { name: "Pinot Grigio 0.75 lt", price: "€27.00" },
      { name: "Prosecco 0.75 lt", price: "€28.50" },
      { name: "Falanghina 0.75 lt", price: "€25.50" },
      { name: "Sauvignon 0.75 lt", price: "€25.50" },
      { name: "Chardonnay 0.75 lt", price: "€25.50" },
      { name: "Gewurztraminer 0.75 lt", price: "€29.00" },
      { name: "Rosè 0.75 lt", price: "€25.00" },
      { name: "Moscato d'Asti 0.75 lt", price: "€24.50" }
    ],
    'Vino Rosso': [
      { name: "Vino Rosso 1/4 lt - House Red Wine", price: "€7.50" },
      { name: "Vino Rosso 1/2 lt - House Red Wine", price: "€12.50" },
      { name: "Vino Rosso 1 lt - House Red Wine", price: "€19.00" },
      { name: "Chianti 0.375 lt", price: "€15.00" },
      { name: "Chianti 0.75 lt", price: "€28.00" },
      { name: "Dolcetto D'Alba 0.75 lt", price: "€27.00" },
      { name: "Merlot Bio 0.75 lt", price: "€28.00" },
      { name: "Barbera 0.75 lt", price: "€29.00" },
      { name: "Montepulciano Bio 0.75 lt", price: "€35.00" },
      { name: "Cannonau 0.75 lt", price: "€27.00" },
      { name: "Sangiovese Bio 0.75 lt", price: "€30.00" },
      { name: "Lambrusco 0.75 lt", price: "€25.00" },
      { name: "Valpolicella 0.75 lt", price: "€32.00" },
      { name: "Brunello di Montalcino 0.75 lt", price: "€75.00" }
    ],
    'Calici di Vino': [
      { name: "Bianco o Rosso della casa", price: "€6.60" },
      { name: "Sauvignon - Pinot Grigio - Chardonnay - Falanghina - Rosè ", price: "€7.50" },
      { name: "Prosecco - Gewurztraminer", price: "€8.50" },
      { name: "Merlot - Chianti - Cannonau - Sangiovese - Dolcetto D'Alba", price: "€8.50" },
      { name: "Lambrusco", price: "€7.50" },
      { name: "Moscato d'Asti", price: "€7.50" },
      { name: "Montepulciano - Valpolicella", price: "€9.00" },
      { name: "Brunello di Montalcino", price: "€22.50" }
    ],
    'Aperitivi e Cocktail': [
      { name: "Aperol Spritz", price: "€10.00" },
      { name: "Campari Spritz", price: "€10.00" },
      { name: "Negroni", price: "€10.00" },
      { name: "Americano", price: "€10.00" },
      { name: "Gin Tonic", price: "€10.00" },
      { name: "Vodka Tonic", price: "€10.00" },
      { name: "Mojito", price: "€10.00" }
    ],
    'Le Birre alla Spina': [
      { name: "Moretti 0.2 lt", price: "€5.50" },
      { name: "Moretti 0.4 lt", price: "€7.00" },
      { name: "Ichnusa Non Filtrata 0.2 lt", price: "€6.00" },
      { name: "Ichnusa Non Filtrata 0.4 lt", price: "€7.50" }
    ],
    'Le Birre': [
      { name: "Ichnusa Non Filtrata 0.33 lt", price: "€6.50" },
      { name: "Guinnes 0.33 lt", price: "€7.50" },
      { name: "Ceres 0.33 lt", price: "€7.50" },
      { name: "Moretti Rossa 0.33 lt", price: "€6.50" },
      { name: "Birra Messina Cristalli di Sale 0.33 lt", price: "€6.50" },
      { name: "Beck's 0.33 lt", price: "€6.50" },
      { name: "Heineken 0.33 lt", price: "€6.50" },
      { name: "Heineken Analcolica 0.33 lt", price: "€6.50" }
    ]
  }
};

const Menu = () => {
  const { t } = useTranslation();
  const ristoranteRef = useRef(null);
  const pizzeriaRef = useRef(null);
  const cantinaRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="menu-page-background">
      <div className="menu-page-container">
        <div className="menu-categories-sidebar">
          <div className="menu-category-sidebar-item" onClick={() => handleScrollTo(ristoranteRef)}>
            <a>{t('Ristorante')}</a>
          </div>
          <div className="menu-category-sidebar-item" onClick={() => handleScrollTo(pizzeriaRef)}>
            <a>{t('Pizzeria')}</a>
          </div>
          <div className="menu-category-sidebar-item" onClick={() => handleScrollTo(cantinaRef)}>
            <a>{t('Cantina')}</a>
          </div>
        </div>
        <div className="menu-content-container">
          <div ref={ristoranteRef} id="ristorante" className="section">
            <div className="section-title-placeholder"></div>
            <h1>{t('Ristorante')}</h1>
            {Object.keys(menuCategories.Ristorante).map(section => (
              <div key={section} className="menu-section">
                <h2 className="menu-section-header">{t(section)}</h2>
                <ul>
                  {menuCategories.Ristorante[section].map(item => (
                    <li key={item.name} className="menu-item">
                      <span className="menu-item-name">{t(item.name)}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div ref={pizzeriaRef} id="pizzeria" className="section">
            <div className="section-title-placeholder"></div>
            <h1>{t('Pizzeria')}</h1>
            {Object.keys(menuCategories.Pizzeria).map(section => (
              <div key={section} className="menu-section">
                <h2 className="menu-section-header">{t(section)}</h2>
                <ul>
                  {menuCategories.Pizzeria[section].map(item => (
                    <li key={item.name} className="menu-item">
                      <span className="menu-item-name">{t(item.name)}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div ref={cantinaRef} id="cantina" className="section">
            <div className="section-title-placeholder"></div>
            <h1>{t('Cantina')}</h1>
            {Object.keys(menuCategories.Cantina).map(section => (
              <div key={section} className="menu-section">
                <h2 className="menu-section-header">{t(section)}</h2>
                <ul>
                  {menuCategories.Cantina[section].map(item => (
                    <li key={item.name} className="menu-item">
                      <span className="menu-item-name">{t(item.name)}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="menu-footer">
            <p className="menu-note"><strong>{t('Nota')}:</strong> {t('Il servizio è del 12%')}.</p>
            <p className="menu-note">{t('Nei nostri piatti possono essere presenti allergeni')}.</p>
            <p className="menu-note">{t('Non utilizziamo ingredienti congelati')}.</p>
          </div>
        </div>
      </div>
      <button className="modal-button" onClick={handleOpenModal}>Allergeni</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Allergeni</h2>
            <h3>Frutta a guscio e derivati</h3>
            <p>Tutti i prodotti che includono: mandorle, nocciole, noci comuni, noci di acagiù, noci pecan e del Brasile e Queensland, pistacchi</p>
            <h3>Glutine</h3>
            <p>Cereali, grano, segale, orzo, avena, farro, kamut, inclusi ibridati, derivati</p>
            <h3>Lupino e Derivati</h3>
            <p>Presente ormai in molti cibi vegani, sotto forma di arrosti, salamini, farine e similari che hanno come base questo legume, ricco di proteine</p>
            <h3>Molluschi e derivati</h3>
            <p>Canestrello, cannolicchio, capasanta, cuore, dattero di mare, fasolaro, garagolo, lumachino, cozza, murice, ostrica, patella, tartufo di mare, tellina e vongola etc.</p>
            <h3>Pesce e derivati</h3>
            <p>Inclusi i derivati, cioè tutti quei prodotti alimentari che si compongono di pesce, anche se in piccole percentuali</p>
            <h3>Sedano e derivati</h3>
            <p>Presente in pezzi ma pure all'interno di preparati per zuppe, salse e concentrati vegetali</p>
            <h3>Semi di sesamo e derivati</h3>
            <p>Oltre ai semi interi usati per il pane, possiamo trovare tracce in alcuni tipi di farine</p>
            <h3>Senape e derivati</h3>
            <p>Si può trovare nelle salse e nei condimenti, specie nella mostarda</p>
            <h3>Soia e derivati</h3>
            <p>Latte, tofu, spaghetti, etc.</p>
            <h3>Uova e derivati</h3>
            <p>Tutti i prodotti composti con uova, anche in parte minima. Tra le più comuni</p>
          </div>
        </div>
      )}
    </div>
  );
}


export default Menu;
