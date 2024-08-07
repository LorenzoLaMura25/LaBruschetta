import React from "react";
import "./Privacy.css";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">{t("Privacy Policy")}</h1>
      <div className="privacy-content">
        <p>
          <strong>{t("Ultimo aggiornamento:")}</strong> {t("19-gen-2023")}
        </p>
        <p>
          <strong>{t("Data di efficacia:")}</strong> {t("19-gen-2023")}
        </p>
        <p>
          {t(
            "Questa Informativa sulla privacy descrive le politiche di La Bruschetta e…SRL, Via Sardegna, 39, Roma 00187, Italia, email: labruschettae01@gmail.com, telefono: 0642013721 sulla raccolta, utilizzo e divulgazione delle tue informazioni che raccogliamo quando utilizzi il nostro sito web (https://labruschettaroma.com). (il “Servizio”). Accedendo o utilizzando il Servizio, accetti la raccolta, l’uso e la divulgazione delle tue informazioni in conformità con questa Informativa sulla privacy. Se non accetti, ti preghiamo di non accedere o utilizzare il Servizio."
          )}
        </p>
        <p>
          {t(
            "Potremmo modificare questa Informativa sulla privacy in qualsiasi momento senza alcun preavviso e pubblicheremo l’Informativa sulla privacy riveduta sul Servizio. La politica riveduta sarà efficace 180 giorni dalla pubblicazione della politica riveduta sul Servizio e il tuo continuo accesso o utilizzo del Servizio dopo tale periodo costituirà la tua accettazione dell’Informativa sulla privacy riveduta. Ti raccomandiamo pertanto di esaminare periodicamente questa pagina."
          )}
        </p>
        <h2>{t("I TUOI DIRITTI")}</h2>
        <p>
          {t(
            "A seconda della legge applicabile, potresti avere il diritto di accedere e rettificare o cancellare i tuoi dati personali o ricevere una copia dei tuoi dati personali, limitare o opporti al trattamento attivo dei tuoi dati, chiederci di condividere (portare) le tue informazioni personali con un’altra entità, ritirare qualsiasi consenso fornito a noi per elaborare i tuoi dati, un diritto di presentare una denuncia a un’autorità statutaria e tali altri diritti come possono essere rilevanti in base alle leggi applicabili. Per esercitare questi diritti, puoi scriverci a labruschettae01@gmail.com. Risponderemo alla tua richiesta in conformità alla legge applicabile."
          )}
        </p>
        <p>
          {t(
            "Si prega di notare che se non ci consenti di raccogliere o elaborare le informazioni personali necessarie o se ritiri il consenso per elaborare le stesse per gli scopi richiesti, potresti non essere in grado di accedere o utilizzare i servizi per i quali le tue informazioni sono state richieste."
          )}
        </p>
        <h2>{t("COOKIES ECC.")}</h2>
        <p>
          {t(
            "Per saperne di più su come utilizziamo questi e le tue scelte in relazione a queste tecnologie di tracciamento, ti invitiamo a consultare la nostra Informativa sui cookie."
          )}
        </p>
        <h2>{t("SICUREZZA")}</h2>
        <p>
          {t(
            "Adottiamo misure di sicurezza per proteggere le tue informazioni personali. Tuttavia, nessun metodo di trasmissione attraverso Internet o metodo di archiviazione elettronica è sicuro al 100%. Non possiamo garantire la sicurezza assoluta dei tuoi dati. Per qualsiasi preoccupazione sulla sicurezza dei tuoi dati, ti preghiamo di contattarci."
          )}
        </p>
        <h2>{t("GRIEVANCE / DPO")}</h2>
        <p>
          {t(
            "Se hai domande o preoccupazioni riguardo l’elaborazione delle tue informazioni disponibili con noi, puoi inviare un’email al nostro Ufficiale per la tutela dei dati a La Bruschetta e…SRL, Via Sardegna, 39, email: labruschettae01@gmail.com. Affronteremo le tue preoccupazioni in conformità alla legge applicabile."
          )}
        </p>
        <h2>{t("Informativa sui cookie")}</h2>
        <p>
          <strong>{t("Data di efficacia:")}</strong> {t("19-gen-2023")}
        </p>
        <p>
          <strong>{t("Ultimo aggiornamento:")}</strong> {t("19-gen-2023")}
        </p>
        <h2>{t("Cos’è un cookie?")}</h2>
        <p>
          {t(
            "Questa Informativa sui cookie spiega cos’è un cookie e come lo utilizziamo, i tipi di cookie che utilizziamo, ovvero le informazioni che raccogliamo tramite i cookie e come vengono utilizzate, e come gestire le impostazioni dei cookie."
          )}
        </p>
        <p>
          {t(
            "I cookie sono piccoli file di testo che vengono utilizzati per archiviare piccole informazioni. Vengono archiviati sul tuo dispositivo quando il sito web viene caricato sul tuo browser. Questi cookie ci aiutano a far funzionare il sito web in modo appropriato, a renderlo più sicuro, a fornire una migliore esperienza utente e a capire come funziona il sito web e dove è necessario migliorare."
          )}
        </p>
        <h2>{t("Come utilizziamo i cookie?")}</h2>
        <p>
          {t(
            "Come la maggior parte dei servizi online, il nostro sito web utilizza i cookie di prima parte e di terze parti per diverse finalità. I cookie di prima parte sono principalmente necessari per far funzionare il sito web in modo appropriato e non raccolgono alcun dato personalmente identificabile."
          )}
        </p>
        <p>
          {t(
            "I cookie di terze parti utilizzati sul nostro sito web servono principalmente a capire come funziona il sito web, come interagisci con il nostro sito web, a mantenere i nostri servizi sicuri, a fornire pubblicità pertinenti per te e, in generale, a fornirti una migliore esperienza utente e a velocizzare le tue future interazioni con il nostro sito web."
          )}
        </p>
        <h2>{t("Cookie in uso")}</h2>
        <p>{t("[Inserisci i dettagli sui cookie specifici in uso]")}</p>
        <h2>{t("Gestisci le preferenze dei cookie")}</h2>
        <p>
          {t(
            "Puoi modificare le preferenze dei cookie in qualsiasi momento facendo clic sul pulsante sopra. Ciò ti consentirà di rivedere il banner di consenso dei cookie e modificare le tue preferenze o revocare il tuo consenso immediatamente."
          )}
        </p>
        <p>
          {t(
            "Inoltre, i diversi browser forniscono metodi diversi per bloccare e eliminare i cookie utilizzati dai siti web. È possibile modificare le impostazioni del proprio browser per bloccare / eliminare i cookie. Di seguito sono elencati i link ai documenti di supporto su come gestire e eliminare i cookie dai principali browser web."
          )}
        </p>
        <ul>
          <li>
            {t("Chrome:")}{" "}
            <a
              href="https://support.google.com/accounts/answer/32050"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.google.com/accounts/answer/32050
            </a>
          </li>
          <li>
            {t("Safari:")}{" "}
            <a
              href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.apple.com/en-in/guide/safari/sfri11471/mac
            </a>
          </li>
          <li>
            {t("Firefox:")}{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
            </a>
          </li>
          <li>
            {t("Internet Explorer:")}{" "}
            <a
              href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
            </a>
          </li>
        </ul>
        <p>
          {t(
            "Se si utilizza un altro browser web, si prega di visitare i documenti di supporto ufficiali del proprio browser."
          )}
        </p>
        <p>
          {t(
            "Informativa sui cookie generata da CookieYes – Generatore di Informativa sui cookie."
          )}
        </p>
      </div>
    </div>
  );
};

export default Privacy;
