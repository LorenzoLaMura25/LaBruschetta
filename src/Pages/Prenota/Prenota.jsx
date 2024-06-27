import React from 'react';
import { useTranslation } from 'react-i18next';

const Prenota = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 style={{marginTop:"100px"}}>{t('Prenota')}</h1>
    </div>
  );
}

export default Prenota;
