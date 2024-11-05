import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import logo from '../assets/header-logo.png';

const Header: React.FC = () => {

  return (
    <AppBar position="sticky" color="primary" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Box sx={{ '&:hover': { paddingX: 2, paddingY: 1, borderRadius: '10px', border: '1px solid white' } }}>
              <Link to="/">
                <Typography color="secondary">Home</Typography>
              </Link>
            </Box>
            <Box><Link to="/prices"><Typography color="secondary">Prices</Typography></Link></Box>
            <Box><Link to="/team"><Typography color="secondary">Team</Typography></Link></Box>
            <Box><Link to="/work"><Typography color="secondary">Work</Typography></Link></Box>
            <Box><Link to="/contact"><Typography color="secondary">Contact</Typography></Link></Box>
          </Box>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
