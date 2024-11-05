import React from 'react';
import {Button} from '@mui/material';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const {i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  return (
    <Button color="inherit" onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
