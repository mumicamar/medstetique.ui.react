import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

function Team() {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2">{t('team.title')}</Typography>
      <Typography variant="body1" gutterBottom>
        {t('team.description')}
      </Typography>

      <Grid container spacing={4}>
        {/* Example Team Members */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" image="/path/to/image1.jpg" alt="Member 1" />
            <CardContent>
              <Typography variant="h5">Member 1</Typography>
              <Typography variant="body2">Position 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" image="/path/to/image2.jpg" alt="Member 2" />
            <CardContent>
              <Typography variant="h5">Member 2</Typography>
              <Typography variant="body2">Position 2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Team;
