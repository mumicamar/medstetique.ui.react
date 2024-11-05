import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Typography} from '@mui/material';

const Home: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Typography variant="h2">{t('home.title')}</Typography>
      <Typography variant="body1">{t('home.description')}</Typography>
    </Container>
  );
};

export default Home;
