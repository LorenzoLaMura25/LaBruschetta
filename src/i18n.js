import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Menu": "Menu",
      "Prenota": "Book",
      "Prenota ora": "Book now",
      "Ristorante": "Restaurant",
      "Pizzeria": "Pizzeria",
      "Cantina": "Cellar",
      "Le Bruschette": "Bruschetta",
      "La Nostra Pasta all' uovo Tirata a Mano": "Our Handmade Egg Pasta",
      "Le zuppe": "Soups",
      "Le carni": "Meats",
      "Il Pesce": "Fish",
      "I Fritti": "Fried Foods",
      "Gli affettati": "Cured Meats",
      "Le verdure": "Vegetables",
      "Le Insalate": "Salads",
      "Patate Sotto la Cenere": "Potatoes Under Ashes",
      "I Crostini": "Crostini",
      "I Nostri Dolci Artigianali": "Our Homemade Desserts",
      "I Formaggi": "Cheeses",
      "La Frutta": "Fruit",
      "La Caffetteria": "Coffee Shop",
      "Nota": "Note",
      "Indietro": "Back",
      "Aglio e Olio Evo": "Garlic and EVO Oil",
      "Pomodoro": "Tomato",
      "Pomodoro e Mozzarella": "Tomato and Mozzarella",
      "Pomodoro e rucola": "Tomato and Arugula",
      "Salmone e Mozzarella": "Salmon and Mozzarella",
      "Burrata e Pomodori Secchi": "Burrata and Sun-Dried Tomatoes",
      "Tagliolini al Pesto": "Tagliolini with Pesto",
      "Tagliolini Calamari e Pomodorini": "Tagliolini with Squid and Cherry Tomatoes",
      "Tagliolini Salmone,Fiori di Zucca e Pomodorini": "Tagliolini with Salmon, Zucchini Flowers, and Cherry Tomatoes",
      "Strozzapreti Acqua e Farina all'Amatriciana": "Strozzapreti with Amatriciana Sauce",
      "Tonnarelli Acqua e Farina alla Carbonara con Pepe Rosa": "Tonnarelli with Carbonara and Pink Pepper",
      "Tonnarelli Acqua e Farina Cacio e Pepe": "Tonnarelli with Cacio e Pepe",
      "Tonnarelli alle Vongole Veraci": "Tonnarelli with Clams",
      "Fettuccine Pomodorini Freschi e Basilico": "Fettuccine with Fresh Tomatoes and Basil",
      "Fettuccine al Ragù": "Fettuccine with Ragu",
      "Fettuccine all'Alfredo": "Fettuccine Alfredo",
      "Gnocchi al Gorgonzola": "Gnocchi with Gorgonzola",
      "Gnocchi Pomodoro e Basilico": "Gnocchi with Tomato and Basil",
      "Ravioli di Ricotta e Spinaci con Burro e Salvia": "Ricotta and Spinach Ravioli with Butter and Sage",
      "Cannelloni di Vitella al Forno a Legna": "Veal Cannelloni Baked in a Wood Oven",
      "Lasagna al Frono a Legna": "Lasagna Baked in a Wood Oven",
      "Tortellini di Brodo di Cappone": "Tortellini in Capon Broth",
      "Zuppa di verdure": "Vegetable Soup",
      "Zuppa di Legumi": "Legume Soup",
      "Maltagliati e Fagioli": "Maltagliati with Beans",
      "Piccata di Vitella al Limone": "Veal Piccata with Lemon",
      "Saltimbocca di Vitella alla Romana": "Roman-style Veal Saltimbocca",
      "Tagliata di Manzo Qualità Sakura Yoza": "Sakura Yoza Quality Sliced Beef",
      "Tagliata di Pollo": "Sliced Chicken",
      "Abbacchio Arrosto al Forno a Legna con Patate": "Wood Oven Roasted Lamb with Potatoes",
      "Stinco di Vitella al Forno a Legna con purea di Patate": "Wood Oven Roasted Veal Shank with Mashed Potatoes",
      "Polpette al sugo": "Meatballs in Sauce",
      "Salutè di Vongole Veraci": "Sautéed Clams",
      "Spigola con Pomodorini,Patate e Olive": "Sea Bass with Cherry Tomatoes, Potatoes, and Olives",
      "Calamari Freschi Pescati e Fritti": "Freshly Caught Fried Calamari",
      "Un Fiore di Zucca": "A Zucchini Flower",
      "10 Olive Ascolane Riempite a Mano": "10 Hand-Stuffed Ascolane Olives",
      "Fritto Misto di Verdure": "Mixed Vegetable Fry",
      "Patate Fritte Tagliate a Mano": "Hand-Cut French Fries",
      "Prosciutto di Parma di Prima Qualità": "Top Quality Parma Ham",
      "Prosciutto di Parma di Prima Qualità e Mozzarella di Bufala": "Top Quality Parma Ham and Buffalo Mozzarella",
      "Bresaola e Rucola": "Bresaola and Arugula",
      "Cicoria Ripassata": "Sautéed Chicory",
      "Spinaci Ripassati Burro e Parmigiano 30 Mesi": "Sautéed Spinach with Butter and 30-Month Parmigiano",
      "Parmigiana di Melanzane": "Eggplant Parmesan",
      "Carciofo alla Romana": "Roman-style Artichoke",
      "Tiella Gaetana": "Gaetan-style Tiella",
      "Zucchine Romanesche alla Griglia": "Grilled Romanesco Zucchini",
      "Verde": "Green Salad",
      "Mista": "Mixed Salad",
      "Caprese con Mozzarella di Bufala": "Caprese with Buffalo Mozzarella",
      "Tonno e Cipolla Rossa": "Tuna and Red Onion",
      "Al Burro": "With Butter",
      "Asiago e Funghi": "Asiago and Mushrooms",
      "Radicchio e Gorgonzola": "Radicchio and Gorgonzola",
      "Speck e Provola": "Speck and Provola",
      "Brie,Pomodorini e Prosciutto": "Brie, Cherry Tomatoes, and Ham",
      "Alici di Prima Qualità e Mozzarella": "Top Quality Anchovies and Mozzarella",
      "Tiramisù": "Tiramisu",
      "Cannolo Siciliano": "Sicilian Cannoli",
      "Cream Caramel": "Crème Caramel",
      "Cheese Cake": "Cheesecake",
      "Torta di Mele": "Apple Pie",
      "Sacher con Panna": "Sacher Cake with Cream",
      "Coppa al Cioccolato Pan di Stelle": "Chocolate Cup with Pan di Stelle",
      "Coppa al Cioccolato con Granella di Nocciole": "Chocolate Cup with Hazelnut Crumble",
      "Crostata con Crema Pasticciera e Frutti di Bosco": "Custard and Berry Tart",
      "Crema al Limone con Savoiardi al Limoncello e Meringa Morbida": "Lemon Cream with Limoncello Ladyfingers and Soft Meringue",
      "Focaccia con la Nutella": "Focaccia with Nutella",
      "Gelato (crema,cioccolato,nocciola,pistacchio,fragola,limone)": "Ice Cream (cream, chocolate, hazelnut, pistachio, strawberry, lemon)",
      "Mozzarella di Bufala": "Buffalo Mozzarella",
      "Parmiggiano Reggiano 30 Mesi": "30-Month Parmigiano Reggiano",
      "Burrata con Pomodori Secchi e Basilico": "Burrata with Sun-Dried Tomatoes and Basil",
      "Misto di Formaggi": "Mixed Cheeses",
      "Scamorza,Prosciutto e Funghi Cotti nel Forno a Legna": "Scamorza, Ham, and Mushrooms Cooked in a Wood Oven",
      "Ananas": "Pineapple",
      "Macedonia": "Fruit Salad",
      "Melone": "Melon",
      "Frutti di Bosco": "Berries",
      "Caffè Espresso 100% Arabica": "100% Arabica Espresso Coffee",
      "Thè": "Tea",
      "Cappuccino": "Cappuccino",
      "Cioccolata Calda con Panna": "Hot Chocolate with Cream",
      "Pane per Persona": "Bread per Person",
      "Le Pizze": "Pizzas",
      "I Calzoni": "Calzones",
      "Le Bevande": "Drinks",
      "Vino Bianco": "White Wine",
      "Vino Rosso": "Red Wine",
      "Calici di Vino": "Wine Glasses",
      "Aperitivi e Cocktail": "Aperitifs and Cocktails",
      "Le Birre alla Spina": "Draft Beers",
      "Le Birre": "Beers",
      "Margherita": "Margherita",
      "Marinara": "Marinara",
      "Funghi": "Mushrooms",
      "4 Formaggi": "4 Cheeses",
      "Salsiccia": "Sausage",
      "Patate e Salsiccia": "Potatoes and Sausage",
      "Salame Piccante": "Spicy Salami",
      "Napoli con Acciughe di Prima Qualità": "Naples with Top Quality Anchovies",
      "Verdure Miste": "Mixed Vegetables",
      "Capricciosa": "Capricciosa",
      "Prosciutto di Parma di prima Qualità": "Top Quality Parma Ham",
      "Prosciutto e Funghi": "Ham and Mushrooms",
      "Speck, Provola e Zucchine": "Speck, Provola, and Zucchini",
      "Bufala e Pomodorini": "Buffalo Mozzarella and Cherry Tomatoes",
      "Burrata con Pomodori Secchi e Basilico": "Burrata with Sun-Dried Tomatoes and Basil",
      "Fiori di Zucca e Alici": "Zucchini Flowers and Anchovies",
      "Boscaiola-pomodoro, mozzarella,funghi e salsiccia": "Boscaiola-tomato, mozzarella, mushrooms, and sausage",
      "Pizza Crostino Prosciutto Cotto e Mozzarella": "Pizza Crostino with Ham and Mozzarella",
      "Tonno e Cipolla": "Tuna and Onion",
      "Gorgonzola e Cipolla": "Gorgonzola and Onion",
      "Focaccia Olio Evo e Rosmarino": "Focaccia with EVO Oil and Rosemary",
      "Prosciutto di Parma di Prima Qualità e Mozzarella": "Top Quality Parma Ham and Mozzarella",
      "Dal 1928": "Since 1928",
      "LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI": "THE TRADITION OF SIMPLE AND FRESH DISHES",
      "TRAMANDATI DI PADRE IN FIGLIO": "PASSED DOWN FROM FATHER TO SON",
      "LA PASTA FATTA IN CASA": "HOMEMADE PASTA",
      "TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E GENUINI.": "PASSED DOWN FROM GENERATION TO GENERATION AND GIVES UNIQUE AND GENUINE FLAVORS.",
      "Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte le nostre paste infatti sono preparate come una volta. Un laboratorio dedicato, dove sapientemente a mano viene lavorata la pasta che i nostri commensali potranno scegliere nel menu.": "Particular attention to our handmade fresh pasta. In fact, all our pasta is prepared as it used to be. A dedicated laboratory, where pasta is skillfully handmade for our guests to choose from the menu.",
      "RISTORANTE - PIZZERIA": "RESTAURANT - PIZZERIA",
      "PER UN'ESPERIENZA CULINARIA AUTENTICA E GENUINA, UTILIZZIAMO SOLO INGREDIENTI FRESCHI": "FOR AN AUTHENTIC AND GENUINE CULINARY EXPERIENCE, WE USE ONLY FRESH INGREDIENTS",
      "La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea, utilizzando ingredienti freschi e fatti a mano, come la pasta fatta in casa.": "The passion and dedication to cooking have made the restaurant famous, where Aldo and then his son Raffaele have maintained the tradition of grandfather Andrea, using fresh and handmade ingredients, like homemade pasta.",
      "Da oltre 25 anni, Raffaele gestisce con cura e attenzione per i dettagli il ristorante-pizzeria “La Bruschetta e…”, rendendolo punto di riferimento per il quartiere. Nel locale si fondono alla perfezione tradizione storica di famiglia e ricerca di materie prime per soddisfare le esigenze di tutti i palati.": "For over 25 years, Raffaele has carefully and meticulously managed the “La Bruschetta e…” restaurant-pizzeria, making it a neighborhood landmark. The restaurant perfectly blends family historical tradition and the search for raw materials to satisfy the needs of all palates.",
      "LA PIZZA​": "PIZZA",
      "La pizza è un grande classico della nostra tradizione, un piatto che in tutto il mondo rappresenta l’Italia. La nostra pizza è fatta in casa con una lievitazione naturale e cotta nel forno a legna. I nostri ospiti non sono più semplici clienti ma diventano artefici e creatori della loro pizza godendo della più completa libertà.": "Pizza is a great classic of our tradition, a dish that represents Italy all over the world. Our pizza is homemade with natural leavening and baked in a wood-fired oven. Our guests are no longer just customers but become creators of their own pizza, enjoying complete freedom.",
      "Prenota il tuo tavolo": "Book your table",
      "Goditi un'esperienza culinaria indimenticabile.": "Enjoy an unforgettable culinary experience.",
      "Posizione & Orari": "Location & Hours",
      "Orario Continuato": "Continuous Hours",
      "Aperto tutti i giorni (11:00 - 23:30)": "Open daily (11:00 AM - 11:30 PM)",
      "Contatti": "Contacts",
      "nome": "First Name",
      "cognome": "Last Name",
      "numeroPersone": "Number of people",
      "data": "Date",
      "orario": "Time",
      "telefono": "Phone",
      "Form di Prenotazione": "Booking Form",
      "Scegli la data": "Choose the date",
      "Scegli l'orario": "Choose the time",
      "Numero di persone": "Number of people",
      "Nome": "Name",
      "Cognome": "Surname",
      "Telefono": "Phone",
      "Prenota": "Book",
      "Numero di Dipendenti":"Number of Employees",
      "Nome Azienda":"Company Name",
      "Collabora con Noi":"Collaborate with Us"
    },
  },
  it: {
    translation: {
      "Home": "Home",
      "Menu": "Menu",
      "Prenota": "Prenota",
      "Prenota ora": "Prenota ora",
      "Ristorante": "Ristorante",
      "Pizzeria": "Pizzeria",
      "Cantina": "Cantina",
      "Le Bruschette": "Le Bruschette",
      "La Nostra Pasta all' uovo Tirata a Mano": "La Nostra Pasta all' uovo Tirata a Mano",
      "Le zuppe": "Le zuppe",
      "Le carni": "Le carni",
      "Il Pesce": "Il Pesce",
      "I Fritti": "I Fritti",
      "Gli affettati": "Gli affettati",
      "Le verdure": "Le verdure",
      "Le Insalate": "Le Insalate",
      "Patate Sotto la Cenere": "Patate Sotto la Cenere",
      "I Crostini": "I Crostini",
      "I Nostri Dolci Artigianali": "I Nostri Dolci Artigianali",
      "I Formaggi": "I Formaggi",
      "La Frutta": "La Frutta",
      "La Caffetteria": "La Caffetteria",
      "Nota": "Nota",
      "Indietro": "Indietro",
      "Prenota il tuo tavolo": "Prenota il tuo tavolo",
      "Goditi un'esperienza culinaria indimenticabile.": "Goditi un'esperienza culinaria indimenticabile.",
      "Posizione & Orari": "Posizione & Orari",
      "Orario Continuato": "Orario Continuato",
      "Aperto tutti i giorni (11:00 - 23:30)": "Aperto tutti i giorni (11:00 - 23:30)",
      "Contatti": "Contatti",
      // Le traduzioni italiane già esistono nel tuo codice
      "Aglio e Olio Evo": "Aglio e Olio Evo",
      "Pomodoro": "Pomodoro",
      "Pomodoro e Mozzarella": "Pomodoro e Mozzarella",
      "Pomodoro e rucola": "Pomodoro e rucola",
      "Salmone e Mozzarella": "Salmone e Mozzarella",
      "Burrata e Pomodori Secchi": "Burrata e Pomodori Secchi",
      "Tagliolini al Pesto": "Tagliolini al Pesto",
      "Tagliolini Calamari e Pomodorini": "Tagliolini Calamari e Pomodorini",
      "Tagliolini Salmone,Fiori di Zucca e Pomodorini": "Tagliolini Salmone,Fiori di Zucca e Pomodorini",
      "Strozzapreti Acqua e Farina all'Amatriciana": "Strozzapreti Acqua e Farina all'Amatriciana",
      "Tonnarelli Acqua e Farina alla Carbonara con Pepe Rosa": "Tonnarelli Acqua e Farina alla Carbonara con Pepe Rosa",
      "Tonnarelli Acqua e Farina Cacio e Pepe": "Tonnarelli Acqua e Farina Cacio e Pepe",
      "Tonnarelli alle Vongole Veraci": "Tonnarelli alle Vongole Veraci",
      "Fettuccine Pomodorini Freschi e Basilico": "Fettuccine Pomodorini Freschi e Basilico",
      "Fettuccine al Ragù": "Fettuccine al Ragù",
      "Fettuccine all'Alfredo": "Fettuccine all'Alfredo",
      "Gnocchi al Gorgonzola": "Gnocchi al Gorgonzola",
      "Gnocchi Pomodoro e Basilico": "Gnocchi Pomodoro e Basilico",
      "Ravioli di Ricotta e Spinaci con Burro e Salvia": "Ravioli di Ricotta e Spinaci con Burro e Salvia",
      "Cannelloni di Vitella al Forno a Legna": "Cannelloni di Vitella al Forno a Legna",
      "Lasagna al Frono a Legna": "Lasagna al Frono a Legna",
      "Tortellini di Brodo di Cappone": "Tortellini di Brodo di Cappone",
      "Zuppa di verdure": "Zuppa di verdure",
      "Zuppa di Legumi": "Zuppa di Legumi",
      "Maltagliati e Fagioli": "Maltagliati e Fagioli",
      "Piccata di Vitella al Limone": "Piccata di Vitella al Limone",
      "Saltimbocca di Vitella alla Romana": "Saltimbocca di Vitella alla Romana",
      "Tagliata di Manzo Qualità Sakura Yoza": "Tagliata di Manzo Qualità Sakura Yoza",
      "Tagliata di Pollo": "Tagliata di Pollo",
      "Abbacchio Arrosto al Forno a Legna con Patate": "Abbacchio Arrosto al Forno a Legna con Patate",
      "Stinco di Vitella al Forno a Legna con purea di Patate": "Stinco di Vitella al Forno a Legna con purea di Patate",
      "Polpette al sugo": "Polpette al sugo",
      "Salutè di Vongole Veraci": "Salutè di Vongole Veraci",
      "Spigola con Pomodorini,Patate e Olive": "Spigola con Pomodorini,Patate e Olive",
      "Calamari Freschi Pescati e Fritti": "Calamari Freschi Pescati e Fritti",
      "Un Fiore di Zucca": "Un Fiore di Zucca",
      "10 Olive Ascolane Riempite a Mano": "10 Olive Ascolane Riempite a Mano",
      "Fritto Misto di Verdure": "Fritto Misto di Verdure",
      "Patate Fritte Tagliate a Mano": "Patate Fritte Tagliate a Mano",
      "Prosciutto di Parma di Prima Qualità": "Prosciutto di Parma di Prima Qualità",
      "Prosciutto di Parma di Prima Qualità e Mozzarella di Bufala": "Prosciutto di Parma di Prima Qualità e Mozzarella di Bufala",
      "Bresaola e Rucola": "Bresaola e Rucola",
      "Cicoria Ripassata": "Cicoria Ripassata",
      "Spinaci Ripassati Burro e Parmigiano 30 Mesi": "Spinaci Ripassati Burro e Parmigiano 30 Mesi",
      "Parmigiana di Melanzane": "Parmigiana di Melanzane",
      "Carciofo alla Romana": "Carciofo alla Romana",
      "Tiella Gaetana": "Tiella Gaetana",
      "Zucchine Romanesche alla Griglia": "Zucchine Romanesche alla Griglia",
      "Verde": "Verde",
      "Mista": "Mista",
      "Caprese con Mozzarella di Bufala": "Caprese con Mozzarella di Bufala",
      "Tonno e Cipolla Rossa": "Tonno e Cipolla Rossa",
      "Al Burro": "Al Burro",
      "Asiago e Funghi": "Asiago e Funghi",
      "Radicchio e Gorgonzola": "Radicchio e Gorgonzola",
      "Speck e Provola": "Speck e Provola",
      "Brie,Pomodorini e Prosciutto": "Brie,Pomodorini e Prosciutto",
      "Alici di Prima Qualità e Mozzarella": "Alici di Prima Qualità e Mozzarella",
      "Tiramisù": "Tiramisù",
      "Cannolo Siciliano": "Cannolo Siciliano",
      "Cream Caramel": "Cream Caramel",
      "Cheese Cake": "Cheese Cake",
      "Torta di Mele": "Torta di Mele",
      "Sacher con Panna": "Sacher con Panna",
      "Coppa al Cioccolato Pan di Stelle": "Coppa al Cioccolato Pan di Stelle",
      "Coppa al Cioccolato con Granella di Nocciole": "Coppa al Cioccolato con Granella di Nocciole",
      "Crostata con Crema Pasticciera e Frutti di Bosco": "Crostata con Crema Pasticciera e Frutti di Bosco",
      "Crema al Limone con Savoiardi al Limoncello e Meringa Morbida": "Crema al Limone con Savoiardi al Limoncello e Meringa Morbida",
      "Focaccia con la Nutella": "Focaccia con la Nutella",
      "Gelato (crema,cioccolato,nocciola,pistacchio,fragola,limone)": "Gelato (crema,cioccolato,nocciola,pistacchio,fragola,limone)",
      "Mozzarella di Bufala": "Mozzarella di Bufala",
      "Parmiggiano Reggiano 30 Mesi": "Parmiggiano Reggiano 30 Mesi",
      "Burrata con Pomodori Secchi e Basilico": "Burrata con Pomodori Secchi e Basilico",
      "Misto di Formaggi": "Misto di Formaggi",
      "Scamorza,Prosciutto e Funghi Cotti nel Forno a Legna": "Scamorza,Prosciutto e Funghi Cotti nel Forno a Legna",
      "Ananas": "Ananas",
      "Macedonia": "Macedonia",
      "Melone": "Melone",
      "Frutti di Bosco": "Frutti di Bosco",
      "Caffè Espresso 100% Arabica": "Caffè Espresso 100% Arabica",
      "Thè": "Thè",
      "Cappuccino": "Cappuccino",
      "Cioccolata Calda con Panna": "Cioccolata Calda con Panna",
      "Pane per Persona": "Pane per Persona",
      "Le Pizze": "Le Pizze",
      "I Calzoni": "I Calzoni",
      "Le Bevande": "Le Bevande",
      "Vino Bianco": "Vino Bianco",
      "Vino Rosso": "Vino Rosso",
      "Calici di Vino": "Calici di Vino",
      "Aperitivi e Cocktail": "Aperitivi e Cocktail",
      "Le Birre alla Spina": "Le Birre alla Spina",
      "Le Birre": "Le Birre",
      "Margherita": "Margherita",
      "Marinara": "Marinara",
      "Funghi": "Funghi",
      "4 Formaggi": "4 Formaggi",
      "Salsiccia": "Salsiccia",
      "Patate e Salsiccia": "Patate e Salsiccia",
      "Salame Piccante": "Salame Piccante",
      "Napoli con Acciughe di Prima Qualità": "Napoli con Acciughe di Prima Qualità",
      "Verdure Miste": "Verdure Miste",
      "Capricciosa": "Capricciosa",
      "Prosciutto di Parma di prima Qualità": "Prosciutto di Parma di prima Qualità",
      "Prosciutto e Funghi": "Prosciutto e Funghi",
      "Speck, Provola e Zucchine": "Speck, Provola e Zucchine",
      "Bufala e Pomodorini": "Bufala e Pomodorini",
      "Burrata con Pomodori Secchi e Basilico": "Burrata con Pomodori Secchi e Basilico",
      "Fiori di Zucca e Alici": "Fiori di Zucca e Alici",
      "Boscaiola-pomodoro, mozzarella,funghi e salsiccia": "Boscaiola-pomodoro, mozzarella,funghi e salsiccia",
      "Pizza Crostino Prosciutto Cotto e Mozzarella": "Pizza Crostino Prosciutto Cotto e Mozzarella",
      "Tonno e Cipolla": "Tonno e Cipolla",
      "Gorgonzola e Cipolla": "Gorgonzola e Cipolla",
      "Focaccia Olio Evo e Rosmarino": "Focaccia Olio Evo e Rosmarino",

      "Dal 1928": "Dal 1928",
      "LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI": "LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI",
      "TRAMANDATI DI PADRE IN FIGLIO": "TRAMANDATI DI PADRE IN FIGLIO",
      "LA PASTA FATTA IN CASA": "LA PASTA FATTA IN CASA",
      "TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E GENUINI.": "TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E GENUINI.",
      "Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte le nostre paste infatti sono preparate come una volta. Un laboratorio dedicato, dove sapientemente a mano viene lavorata la pasta che i nostri commensali potranno scegliere nel menu.": "Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte le nostre paste infatti sono preparate come una volta. Un laboratorio dedicato, dove sapientemente a mano viene lavorata la pasta che i nostri commensali potranno scegliere nel menu.",
      "RISTORANTE - PIZZERIA": "RISTORANTE - PIZZERIA",
      "PER UN'ESPERIENZA CULINARIA AUTENTICA E GENUINA, UTILIZZIAMO SOLO INGREDIENTI FRESCHI": "PER UN'ESPERIENZA CULINARIA AUTENTICA E GENUINA, UTILIZZIAMO SOLO INGREDIENTI FRESCHI",
      "La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea, utilizzando ingredienti freschi e fatti a mano, come la pasta fatta in casa.": "La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea, utilizzando ingredienti freschi e fatti a mano, come la pasta fatta in casa.",
      "Da oltre 25 anni, Raffaele gestisce con cura e attenzione per i dettagli il ristorante-pizzeria “La Bruschetta e…”, rendendolo punto di riferimento per il quartiere. Nel locale si fondono alla perfezione tradizione storica di famiglia e ricerca di materie prime per soddisfare le esigenze di tutti i palati.": "Da oltre 25 anni, Raffaele gestisce con cura e attenzione per i dettagli il ristorante-pizzeria “La Bruschetta e…”, rendendolo punto di riferimento per il quartiere. Nel locale si fondono alla perfezione tradizione storica di famiglia e ricerca di materie prime per soddisfare le esigenze di tutti i palati.",
      "LA PIZZA​": "LA PIZZA",
      "La pizza è un grande classico della nostra tradizione, un piatto che in tutto il mondo rappresenta l’Italia. La nostra pizza è fatta in casa con una lievitazione naturale e cotta nel forno a legna. I nostri ospiti non sono più semplici clienti ma diventano artefici e creatori della loro pizza godendo della più completa libertà.": "La pizza è un grande classico della nostra tradizione, un piatto che in tutto il mondo rappresenta l’Italia. La nostra pizza è fatta in casa con una lievitazione naturale e cotta nel forno a legna. I nostri ospiti non sono più semplici clienti ma diventano artefici e creatori della loro pizza godendo della più completa libertà",
      "nome":"nome",
      "cognome":"cognome",
      "numeroPersone": "Numero di persone",
      "data": "Data",
      "orario": "Orario",
      "telefono": "Telefono",
      "Form di Prenotazione": "Form di Prenotazione",
      "Scegli la data": "Scegli la data",
      "Scegli l'orario": "Scegli l'orario",
      "Numero di persone": "Numero di persone",
      "Nome": "Nome",
      "Cognome": "Cognome",
      "Telefono": "Telefono",
      "Prenota": "Prenota",
      "Numero di Dipendenti":"Numero di Dipendenti",
      "Nome Azienda":"Nome Azienda",
      "Collabora con Noi":"Collabora con Noi"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it', // Lingua predefinita
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
