import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

function Work() {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2">{t('work.title')}</Typography>
      <Typography variant="body1" gutterBottom>
        {t('work.description')}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" image="/path/to/work1.jpg" alt="Work 1" />
            <CardContent>
              <Typography variant="h5">Project 1</Typography>
              <Typography variant="body2">Description of Project 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" image="/path/to/work2.jpg" alt="Work 2" />
            <CardContent>
              <Typography variant="h5">Project 2</Typography>
              <Typography variant="body2">Description of Project 2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Work;
