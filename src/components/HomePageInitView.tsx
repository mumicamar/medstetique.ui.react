import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import initPagePic from '../assets/initPage.jpg';
import logo from '../assets/header-logo.png';
import { useTranslation } from 'react-i18next';
import { Event } from '@mui/icons-material';

export default function HomePageInitView() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '750px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'block',
          width: '100%',
          height: '750px',
          objectFit: 'cover',
        }}
        src={initPagePic}
        alt="initPage"
      />

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
          gap: 3,
          width: '100vw',
        }}
      >
        <img
          style={{
            width: '400px',
            height: 'auto',
          }}
          src={logo}
          alt="logo"
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Faculty Glyphic, sans-serif',
            fontWeight: '400',
            fontSize: {
              xs: '2rem',
              sm: '3rem',
            },
            color: 'white',
            textAlign: 'center',
          }}
        >
          {t('home.welcomeWrapper.title')}
        </Typography>
        {/*<Typography*/}
        {/*  variant="h5"*/}
        {/*  sx={{*/}
        {/*    fontFamily: 'Faculty Glyphic, sans-serif',*/}
        {/*    fontWeight: '400',*/}
        {/*    fontSize: {*/}
        {/*      xs: '0.9rem',*/}
        {/*      sm: '1.1rem',*/}
        {/*    },*/}
        {/*    color: 'white',*/}
        {/*    textAlign: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {t('home.welcomeWrapper.subTitle')}*/}
        {/*</Typography>*/}
        <Button variant="contained" startIcon={<Event />}>
          Book now
        </Button>
      </Box>
    </Box>
  );
}
