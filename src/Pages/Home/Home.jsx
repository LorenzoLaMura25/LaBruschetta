import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Gallery from "../../Components/Gallery/Gallery";
import Image from "../../Components/Image+txt/Image";

function Home() {
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
    "https://labruschettaroma.com/wp-content/uploads/2022/12/il-pane-fatto-in-casa.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7374.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7044.jpg",
    "https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7432.jpg",
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
    <div className="home-container">
      <div className="background-diagonal"></div>
      <div className="hero-section">
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
        <div className="hero-content">
          <h1>LA BRUSCHETTA E...</h1>
          <p>
            Dal 1928
            <br />
            LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI
            <br />
            TRAMANDATI DI PADRE IN FIGLIO
          </p>
          {isTop && (
            <Link className="cta-button" to="/prenota">
              Prenota ora
            </Link>
          )}
        </div>
      </div>
      <hr className="separator-bar" />
      <div className="gallery-section">
        <Gallery
          title={"LA PASTA FATTA IN CASA"}
          images={pastaImages}
          descr={
            "TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E GENUINI."
          }
          mainTxt={
            "Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte le nostre paste infatti sono preparate come una volta. Un laboratorio dedicato, dove sapientemente a mano viene lavorata la pasta che i nostri commensali potranno scegliere nel menu."
          }
        />
      </div>

      <div className="content-box">
        <hr className="separator-bar" />
        <div className="title-content">
          <h1>RISTORANTE - PIZZERIA</h1>
          <h3>
            PER UN'ESPERIENZA CULINARIA AUTENTICA E GENUINA, UTILIZZIAMO SOLO
            INGREDIENTI FRESCHI
          </h3>
        </div>

        <div className="img-compontent">
          <Image
            images={platesImages1}
            description={
              "La passione e la dedizione per la cucina hanno reso il ristorante luogo di fama, dove Aldo e poi suo figlio Raffaele hanno mantenuto alta la tradizione di nonno Andrea, utilizzando ingredienti freschi e fatti a mano, come la pasta fatta in casa."
            }
            textPosition={"left"}
          />
        </div>

        <div className="img-compontent">
          <Image
            images={platesImages2}
            description={
              "Da oltre 25 anni, Raffaele gestisce con cura e attenzione per i dettagli il ristorante-pizzeria “La Bruschetta e…”, rendendolo punto di riferimento per il quartiere. Nel locale si fondono alla perfezione tradizione storica di famiglia e ricerca di materie prime per soddisfare le esigenze di tutti i palati."
            }
            textPosition={"right"}
          />
        </div>
      </div>

      <div className="content-box">
        <Image
          images={pizzaImages}
          title={"LA PIZZA​"}
          description={
            "La pizza è un grande classico della nostra tradizione, un piatto che in tutto il mondo rappresenta l’Italia. La nostra pizza è fatta in casa con una lievitazione naturale e cotta nel forno a legna. I nostri ospiti non sono più semplici clienti ma diventano artefici e creatori della loro pizza godendo della più completa libertà."
          }
          textPosition={"left"}
        />
      </div>

      {!isTop && (
        <Link className="cta-button-fixed" to="/prenota">
          Prenota ora
        </Link>
      )}
    </div>
  );
}

export default Home;
