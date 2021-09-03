import React, { useEffect } from 'react';
import AppRoutes from 'AppRoutes';
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
      <AppRoutes />
      <ToastNotification />
    </ThemeProvider>
  );
}
export default App;
