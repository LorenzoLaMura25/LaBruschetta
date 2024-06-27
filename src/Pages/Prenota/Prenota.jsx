import React from 'react';
import { useTranslation } from 'react-i18next';

const Prenota = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Prenota')}</h1>
      <div>
        <p>{t('Prenota ora')}</p>
      </div>
    </div>
  );
}

export default Prenota;
