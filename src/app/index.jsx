import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routes } from '@/app/routes';
import { ThemeProvider } from 'styled-components';
import theme from '@/theme';
import { useSelector } from 'react-redux';
import { selectGetAppTheme } from '@/store';

const { coloredTheme, lightTheme, darkTheme } = theme;

const availableThemes = {
  colored: coloredTheme,
  light: lightTheme,
  dark: darkTheme,
};

export const App = () => {
  const currentTheme = useSelector(selectGetAppTheme);
  return (
    <Suspense fallback='Loading results...'>
      <ThemeProvider theme={availableThemes[currentTheme]}>
        <Routes>
          {routes.map(({ name, id, child }) => {
            return <Route key={id} path={name} element={child} />;
          })}
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
};
