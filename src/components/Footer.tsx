import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        mt: 'auto',
        background: 'radial-gradient(circle, rgba(245, 230, 204, 0.6) 20%, #e8d4b0 100%);',
        color: 'secondary',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Medstetique</Typography>
    </Box>
  );
}
