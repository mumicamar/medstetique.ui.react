import Grid from '@mui/material/Grid2';
import React from 'react';
import { Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

export default function Location() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: '#dedcdc', borderRadius: '10px', height: '300px' }}
    >
      <Grid size={{ xs: 12, md: 10 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.1989433877766!2d11.589624613197607!3d48.10639787112028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf002283c17b%3A0x86b54b0d56f3afac!2sMedstetique!5e0!3m2!1sen!2sba!4v1731433182701!5m2!1sen!2sba"
          width="100%"
          height="300px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Grid>
      <Grid sx={{ display: 'flex', alignItems: 'center', color: 'black' }} size={{ xs: 12, md: 2 }}>
        <LocationOn />
        <Typography>
          Medstetique
          <br /> Chiemgaustraße 81,
          <br /> Obergiesing
          <br /> 81549 Munich
        </Typography>
      </Grid>
    </Grid>
  );
}
