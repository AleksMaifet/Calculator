import React from 'react';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RoutContainer } from '@/components/RoutContainer';
import { availableThemes } from '@/constants';
import { selectGetAppTheme } from '@/store';

export const App = () => {
  const currentTheme = useSelector(selectGetAppTheme);
  return (
    <ThemeProvider theme={availableThemes[currentTheme]}>
      <RoutContainer />
    </ThemeProvider>
  );
};
