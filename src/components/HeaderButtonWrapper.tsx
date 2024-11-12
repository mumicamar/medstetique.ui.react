import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderButtonWrapperProps {
  children: React.ReactNode;
  to: string;
}

export function HeaderButtonWrapper({ children, to }: HeaderButtonWrapperProps) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(to)}
      sx={{
        paddingX: 2,
        paddingY: 1,
        borderRadius: '10px',
        border: '1px solid transparent',
        fontSize: '1rem',
        '&:hover': {
          paddingX: 2,
          paddingY: 1,
          borderRadius: '10px',
          border: '1px solid white',
          fontSize: '3rem',
          cursor: 'pointer',

          '&p': {
            transition: 'font-size 0.3s ease',
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
