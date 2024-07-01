import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./Home.css";
import Gallery from "../../Components/Gallery/Gallery";
import ImageTxt from "../../Components/Image&txt/Image";

function Home() {
  const { t } = useTranslation();
  const images = [
    "https://labruschettaroma.com/wp-content/uploads/2023/01/DSC6572.jpeg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6784.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6622.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6612.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2023/01/DSC7339.jpeg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7228.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6622.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6612.jpg",
  ];

  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    setIsTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="mobile">
      <div id="hero-section">
        <img id="hero-image" src="/bg-hero.jpg" alt="BG-image" />
        <div id="mask"></div>
        <div id="hero-content">
          <h1>LA BRUSCHETTA E...</h1>
          <p>
            {t('Dal 1928')}<br />
            {t('LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI')}<br />
            {t('TRAMANDATI DI PADRE IN FIGLIO')}
          </p>
          {isTop && (
            <a id="ctaPrenota" href="#">
              {t('Prenota ora')}
            </a>
          )}
        </div>
      </div>
      <hr id="bar" />
      <div id="gallery">
        <Gallery
          title={t('LA PASTA FATTA IN CASA')}
          images={images}
          descr={t('TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E GENUINI.')}
          mainTxt={t('Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte le nostre paste infatti sono preparate come una volta. Un laboratorio dedicato, dove sapientemente a mano viene lavorata la pasta che i nostri commensali potranno scegliere nel menu.')}
        />
      </div>
      <div id="boxx">
        <hr id="bar" />
        <div id="titleContent">
          <h1>{t('RISTORANTE - PIZZERIA')}</h1>
          <h3>
            {t("PER UN'ESPERIENZA CULINARIA AUTENTICA E GENUINA, UTILIZZIAMO SOLO INGREDIENTI FRESCHI")}
          </h3>
        </div>
        <div>
          <ImageTxt
            image={"https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7177.jpg"}
            description={t('La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea, utilizzando ingredienti freschi e fatti a mano, come la pasta fatta in casa.')}
            textPosition={"left"}
          />
        </div>
        <div>
          <ImageTxt
            image={"https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7094.jpg"}
            description={t('Da oltre 25 anni, Raffaele gestisce con cura e attenzione per i dettagli il ristorante-pizzeria “La Bruschetta e…”, rendendolo punto di riferimento per il quartiere. Nel locale si fondono alla perfezione tradizione storica di famiglia e ricerca di materie prime per soddisfare le esigenze di tutti i palati.')}
            textPosition={"right"}
          />
        </div>
      </div>
      <div id="boxx">
        <ImageTxt
          image={"https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7044.jpg"}
          title={t('LA PIZZA​')}
          description={t('La pizza è un grande classico della nostra tradizione, un piatto che in tutto il mondo rappresenta l’Italia. La nostra pizza è fatta in casa con una lievitazione naturale e cotta nel forno a legna. I nostri ospiti non sono più semplici clienti ma diventano artefici e creatori della loro pizza godendo della più completa libertà.')}
          textPosition={"left"}
        />
      </div>
      {!isTop && (
        <a id="ctaPrenotaFixed" href="/contatti">
          {t('Prenota ora')}
        </a>
      )}
    </div>
  );
}

export default Home;
