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
import PageLayout from './components/PageLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path="/prices"
            element={
              <PageLayout>
                <Prices />
              </PageLayout>
            }
          />
          <Route
            path="/team"
            element={
              <PageLayout>
                <Team />
              </PageLayout>
            }
          />
          <Route
            path="/work"
            element={
              <PageLayout>
                <Work />
              </PageLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
