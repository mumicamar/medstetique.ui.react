import React from 'react';
import { Container } from '@mui/material';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container className="container" sx={{ flexGrow: 1 }}>
      {children}
    </Container>
  );
};

export default PageLayout;
