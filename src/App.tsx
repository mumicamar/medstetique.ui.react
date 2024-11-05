import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Team from './pages/Team';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme/theme';
import './i18n';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
