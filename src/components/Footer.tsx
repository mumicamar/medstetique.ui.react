import React from 'react';
import {Box, Typography} from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
      mt: 'auto',
      backgroundColor: 'primary.main',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="body2">© {new Date().getFullYear()} Medstetique</Typography>
  </Box>
);

export default Footer;
