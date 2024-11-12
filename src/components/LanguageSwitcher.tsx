import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  return (
    <Tooltip title={t('header.switchToNextLanguage')}>
      <Button color="inherit" onClick={toggleLanguage} sx={{ gap: 1 }}>
        <LanguageIcon />
        <p>{i18n.language === 'en' ? 'EN' : 'DE'}</p>
      </Button>
    </Tooltip>
  );
}

export default LanguageSwitcher;
