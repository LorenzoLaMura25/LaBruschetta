import React, { useState, useEffect } from "react";
import "./Home.css";
import Image from "../../Components/Images/Image";

function Home() {
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
    <>
      <div id="bg-img">
        <img id="img" src="/img1.jpg" alt="BG-image" />
        <div id="mask"></div>
      </div>

      <div id="title">
        <h4 id="txt-descr">
          Dal 1928
          <br />
          LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI
          <br />
          TRAMANDATI DI PADRE IN FIGLIO
        </h4>

        <div id="try">
          <h1 id="txt-name">LA BRUSCHETTA ROMA</h1>
          <p id="txt-info">Dal lunedì alla domenica</p>
        </div>

        {isTop && (
          <a id="ctaPrenota" className={`fade fade-in`} href="/contatti">
            Prenota ora
          </a>
        )}
      </div>

      <div id="pageContent">
        <div id="pageTitle">
          <h1>LA NOSTRA PASTA FATTA IN CASA</h1>
        </div>

        <div id="description">
          <h5>
            TRAMANDATA DI GENERAZIONE IN GENERAZIONE E CHE REGALA SAPORI UNICI E
            GENUINI.
          </h5>
          <Image
            image1="https://labruschettaroma.com/wp-content/uploads/2023/01/DSC6572.jpeg"
            image2="https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6784.jpg"
            text="Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte
            le nostre paste infatti sono preparate come una volta."
            textPosition="right"
          />
          <Image
            image1="https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6622.jpg"
            image2="https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6612.jpg"
            text="Un laboratorio dedicato, dove sapientemente a mano viene lavorata la
            pasta che i nostri commensali potranno scegliere nel menu."
            textPosition="left"
          />
        </div>
      </div>

      <div id="pageContent">
        <div id="pageTitle">
          <h2>IL RISTORANTE</h2>
        </div>
        <div id="description">
          <h5>
            PER UN'ESPERIENZA CULINARIA AUTENTICA E GENUINA, UTILIZZIAMO SOLO
            INGREDIENTI FRESCHI
          </h5>
          <Image
            image1="https://labruschettaroma.com/wp-content/uploads/2023/01/DSC7339.jpeg"
            image2="https://labruschettaroma.com/wp-content/uploads/2022/12/DSC7228.jpg"
            text="Particolare attenzione alla nostra pasta fresca fatta a mano. Tutte
            le nostre paste infatti sono preparate come una volta."
            textPosition="right"
          />
          <Image
            image1="https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6622.jpg"
            image2="https://labruschettaroma.com/wp-content/uploads/2022/12/DSC6612.jpg"
            text="Un laboratorio dedicato, dove sapientemente a mano viene lavorata la
            pasta che i nostri commensali potranno scegliere nel menu."
            textPosition="left"
          />
        </div>
      </div>

      {!isTop && (
        <a id="ctaPrenotaFixed" className={`fade fade-in`} href="/contatti">
          Prenota ora
        </a>
      )}
    </>
  );
}

export default Home;
