import React, { useEffect } from 'react';
import Routes from 'Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme, { saveColorsIntoCss } from 'styles/customTheme';
import ToastNotification from 'components/ToastNotification';
import 'styles/utility_classes.scss';

function App() {
  const darkMode = true; //dd from Context
  useEffect(() => {
    saveColorsIntoCss(darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={customTheme(darkMode)}>
      <Routes />
      <ToastNotification />
    </ThemeProvider>
  );
}
export default App;
