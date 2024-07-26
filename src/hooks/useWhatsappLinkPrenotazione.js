import { useCallback } from "react";

const useWhatsAppLinkPrenotazione = () => {
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const generateWhatsAppLink = useCallback((formData) => {
    const { data, orario, numeroPersone, nome, cognome, telefono } = formData;
    const formattedData = formatDate(data);
    const phone = "3425837065";
    const message = `*PRENOTAZIONE*\n\nNumero persone: *${numeroPersone}* persone,\ndata e ora: *${formattedData}* - *${orario}*, \nnome: *${nome} ${cognome}*,\ntelefono: *${telefono}*`;
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
  }, []);

  return generateWhatsAppLink;
};

export default useWhatsAppLinkPrenotazione;
