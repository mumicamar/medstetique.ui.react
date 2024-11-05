import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Typography, Box, TextField, Button} from '@mui/material';

const Contact: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Typography variant="h2">{t('contact.title')}</Typography>
      <Typography variant="body1" gutterBottom>
        {t('contact.description')}
      </Typography>

      <Box component="form" sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <TextField label={t('contact.form.name')} variant="outlined" fullWidth/>
        <TextField label={t('contact.form.email')} variant="outlined" fullWidth/>
        <TextField label={t('contact.form.message')} variant="outlined" fullWidth multiline rows={4}/>
        <Button variant="contained" color="primary" type="submit">
          {t('contact.form.submit')}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
