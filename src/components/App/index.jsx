import React from 'react';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RoutContainer } from '@/components/RoutContainer';
import { selectGetAppTheme } from '@/store';
import theme from '@/theme';

const { coloredTheme, lightTheme, darkTheme } = theme;

const availableThemes = {
  colored: coloredTheme,
  light: lightTheme,
  dark: darkTheme,
};

export const App = () => {
  const currentTheme = useSelector(selectGetAppTheme);
  return (
    <ThemeProvider theme={availableThemes[currentTheme]}>
      <RoutContainer />
    </ThemeProvider>
  );
};
