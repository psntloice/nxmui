import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a dark theme
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function Layout({ children }){
  return (
<ThemeProvider theme={darkTheme}>
<CssBaseline />

      {children}
    </ThemeProvider>
  );
};

export default Layout;
