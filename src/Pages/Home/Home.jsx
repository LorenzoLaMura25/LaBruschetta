import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import Gallery from "../../Components/Gallery/Gallery";
import Image from "../../Components/Image+txt/Image";

function Home() {
  const { t } = useTranslation();
  const pastaImages = [
    "https://labruschettaroma.com/wp-content/uploads/2023/01/DSC6572.jpeg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6784.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6622.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6612.jpg",
  ];

  const platesImages1 = [
    "https://labruschettaroma.com/wp-content/uploads/2023/01/DSC7339.jpeg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7277.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7177.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7228.jpg",
  ];

  const platesImages2 = [
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7425.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7409.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7094.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6931.jpg",
  ];

  const pizzaImages = [
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7044.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7374.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/il-pane-fatto-in-casa.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7432.jpg",
  ];

  const texts = ["testo 1", "testo 2", "testo 3", "testo 4"];

  const [heroInViewRef, heroInView] = useInView({
    threshold: 0.5,
  });

  const [ctaInViewRef, ctaInView] = useInView({
    threshold: 0.5,
  });

  const [expanded, setExpanded] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(true);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    setCtaVisible(heroInView);
  }, [heroInView]);

  return (
    <div className="home-container">
      <div className="hero-section" ref={heroInViewRef}>
        <video
          alt="Background Video"
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/4058085/4058085-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
          Il tuo browser non supporta il tag video.
        </video>

        <div className="mask"></div>
        <div className={`hero-content ${heroInView ? "in-view" : ""}`}>
          <div>
            <h1 className={`${heroInView ? "in-view" : ""}`}>
              LA BRUSCHETTA E...
            </h1>
            <p className={`${heroInView ? "in-view" : ""}`}>
              {t("Dal 1928")}
              <br />
              {t("LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI")}
              <br />
              {t("TRAMANDATI DI PADRE IN FIGLIO")}
            </p>
            {heroInView && (
              <Link
                className={`cta-button ${ctaInView ? "in-view" : ""}`}
                to="/book"
              >
                {t("Prenota ora")}
              </Link>
            )}
          </div>
          <div className="social-icons-home">
            <a href="https://www.facebook.com/labruschetta.lab">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/labruschetta.lab">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.tripadvisor.it/Restaurant_Review-g187791-d1217436-Reviews-La_Bruschetta_E-Rome_Lazio.html">
              <i className="fa fa-tripadvisor"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="instagram-feed">INSTAGRAM FEED</div>

      <div className="gallery-section">
        <Gallery
          title={t("LA PASTA FATTA IN CASA")}
          images={pastaImages}
          descr={t(
            "TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E GENUINI."
          )}
          texts={texts}
        />
      </div>

      <div className="business-section">
        <div className={`business-content ${expanded ? "expanded" : ""}`}>
          <img src="/imgs/bg-aziende.jpg" alt="Business" />
          {!expanded && <h2 onClick={handleExpand}>{t("SEI UN'AZIENDA?")}</h2>}
          {expanded && (
            <>
              <h2 onClick={handleExpand}>{t("COLLABORA CON NOI")}</h2>
              <p>
                {t(
                  "Contattaci per saperne di più e ottenere un'offerta personalizzata per il tuo team."
                )}
              </p>
              <a
                className="contattaci-business-button"
                href="/collaborate-with-us"
              >
                {t("Contattaci")}
              </a>
            </>
          )}
        </div>
      </div>

      <div className="img-component">
        <Image
          title={t("IL RISTORANTE")}
          images={platesImages1}
          description={t(
            "La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea, utilizzando ingredienti freschi e fatti a mano, come la pasta fatta in casa."
          )}
          textPosition={"left"}
        />
      </div>

      <div className="img-component">
        <Image
          title={t("I PIATTI GASTRONOMICI")}
          images={platesImages2}
          description={t(
            "Da oltre 25 anni, Raffaele gestisce con cura e attenzione per i dettagli il ristorante-pizzeria “La Bruschetta e…”, rendendolo punto di riferimento per il quartiere. Nel locale si fondono alla perfezione tradizione storica di famiglia e ricerca di materie prime per soddisfare le esigenze di tutti i palati."
          )}
          textPosition={"right"}
        />
      </div>

      <div className="img-component">
        <Image
          title={t("LA PIZZA​")}
          images={pizzaImages}
          description={t(
            "La pizza è un grande classico della nostra tradizione, un piatto che in tutto il mondo rappresenta l’Italia. La nostra pizza è fatta in casa con una lievitazione naturale e cotta nel forno a legna. I nostri ospiti non sono più semplici clienti ma diventano artefici e creatori della loro pizza godendo della più completa libertà."
          )}
          textPosition={"left"}
        />
      </div>

      {!ctaVisible && (
        <Link
          className={`cta-button-fixed ${ctaVisible ? "" : "hidden"}`}
          to="/book"
        >
          {t("Prenota ora")}
        </Link>
      )}
    </div>
  );
}

export default Home;
