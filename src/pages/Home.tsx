import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

function Home() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h2">{t('home.title')}</Typography>
      <Typography variant="body1">{t('home.description')}</Typography>
    </Box>
  );
}

export default Home;
