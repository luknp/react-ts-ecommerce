import React, { useEffect } from 'react';
import AppRoutes from 'AppRoutes';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme, { saveColorsIntoCss } from 'styles/customTheme';
import ToastNotification from 'components/ToastNotification';
import { lazy, Suspense } from 'react';
import { Styles } from 'styles/styled-components';
import 'styles/utility_classes.scss';

function App() {
  const darkMode = true; //dd from Context
  useEffect(() => {
    saveColorsIntoCss(darkMode);
  }, [darkMode]);

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={customTheme(darkMode)}>
        <Styles />
        <AppRoutes />
        <ToastNotification />
      </ThemeProvider>
    </Suspense>
  );
}
export default App;
