import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HomePageCarousel from '../components/HomePageCarousel';
import Location from '../components/Location';
import HomePageInitView from '../components/HomePageInitView';
import PageLayout from '../components/PageLayout';

function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <HomePageInitView />

      <PageLayout sx={{ gap: 5 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <HomePageCarousel />
          </Grid>

          <Grid sx={{ display: 'flex', alignItems: 'center' }} size={{ xs: 12, md: 6 }}>
            <Typography>
              In Munich in Obergiesing-Fasangarten, the stylish Salon Mestetique offers you
              everything you need for your beauty. Forget the stress of everyday life and let
              yourself be pampered with the all-encompassing beauty program.
              <br />
              <br />
              <strong>Nearest public transport:</strong>
              <br />
              The Pöllatstraße station is only a 3-minute walk from the salon.
              <br />
              <br />
              <strong>The team:</strong>
              <br />
              Owner Nermina takes loving care of her customers. She has many years of experience and
              always strives to offer each customer a unique and relaxing experience.
              <br />
              <br />
              <strong>What we like about the salon:</strong>
              <br />
              - Atmosphere: Relaxing, comfortable, friendly.
              <br />
              - Expertise: facials, eyelash and eyebrow styling.
              <br />
              - Products and product brands: High-quality products.
              <br />- Extras: Free drinks and child friendly.
            </Typography>
          </Grid>
        </Grid>
        <Location />
      </PageLayout>
    </Box>
  );
}

export default Home;
