import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F1E1C5',
    },
    secondary: {
      main: '#d9ba58',
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#666666',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#e9dfd8',
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
