import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from './LanguageSwitcher';
import { NavLink } from 'react-router-dom';
import logo from '../assets/header-logo.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: t('header.home'), to: '/' },
    { label: t('header.prices'), to: '/prices' },
    { label: t('header.team'), to: '/team' },
    { label: t('header.work'), to: '/work' },
    { label: t('header.contact'), to: '/contact' },
  ];

  return (
    <AppBar position="sticky" sx={{ background: 'white' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          background: 'radial-gradient(circle, rgba(245, 230, 204, 0.6) 20%, #e8d4b0 100%)',
          width: '100%',
        }}
      >
        <Box component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '80px',
              width: 'auto',
            }}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                color: isActive ? '#d4a373' : 'secondary',
                backgroundColor: isActive ? 'rgba(212, 163, 115, 0.2)' : 'transparent',
              })}
            >
              <Typography>{item.label}</Typography>
            </NavLink>
          ))}
          <LanguageSwitcher />
        </Box>

        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton onClick={toggleDrawer(true)} color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 150,
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display: 'flex',
                padding: '16px',
                color: isActive ? '#d4a373' : 'secondary',
                backgroundColor: isActive ? 'rgba(212, 163, 115, 0.2)' : 'transparent',
                alignItems: 'center',
              })}
            >
              <Typography>{item.label}</Typography>
            </NavLink>
          ))}
          <Box sx={{ display: 'flex', padding: '0 16px', marginTop: 'auto' }}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
