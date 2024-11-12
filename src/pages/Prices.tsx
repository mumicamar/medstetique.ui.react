import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Prices() {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2">{t('prices.title')}</Typography>
      <Typography variant="body1" gutterBottom>
        {t('prices.description')}
      </Typography>

      {/* Example Price List */}
      <List>
        <ListItem>
          <ListItemText primary="Service 1" secondary="$100" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Service 2" secondary="$200" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Service 3" secondary="$300" />
        </ListItem>
      </List>
    </Container>
  );
}

export default Prices;
