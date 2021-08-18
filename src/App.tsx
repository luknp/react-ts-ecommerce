import React from 'react';
import Routes from 'Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from 'styles/customTheme';

function App() {
  return (
    <ThemeProvider theme={customTheme(true)}>
      <Routes />
    </ThemeProvider>
  );
}
export default App;
