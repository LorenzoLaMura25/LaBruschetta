import { useCallback } from "react";

const useWhatsAppLinkAziende = () => {
  const generateWhatsAppLink = useCallback((formData) => {
    const {
      nomeAzienda,
      orarioPranzo,
      numeroDipendentiSettimanali,
      emailAzienda,
      telefonoAzienda,
    } = formData;
    const phone = "3425837065";
    const message = `*RICHIESTA AZIENDA*\n\nNome azienda: *${nomeAzienda}*,\nOrario di pranzo: *${orarioPranzo}*, \nNumero dipendenti a settimana: *${numeroDipendentiSettimanali},\nTelefono: *${telefonoAzienda}*,\nEmail azienda: *${emailAzienda}*`;
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
  }, []);

  return generateWhatsAppLink;
};

export default useWhatsAppLinkAziende;
