import React from 'react';
import { Container } from '@mui/material';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container
      className="container"
      sx={{
        flexGrow: 1,
        py: 5,
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        boxShadow: '8px 0px 15px rgba(0, 0, 0, 0.2), -8px 0px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      {children}
    </Container>
  );
}
