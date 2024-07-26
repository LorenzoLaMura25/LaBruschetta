import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import IT from "./translations/IT.json";
import EN from "./translations/EN.json";
import CH from "./translations/CH.json";
import DE from "./translations/DE.json";

const resources = {
  en: {
    translation: EN,
  },
  it: {
    translation: IT,
  },
  ch: {
    translation: CH,
  },
  de: {
    translation: DE,
  },
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "it",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
