import theme from '@/theme';

export const themesConfig = [
  {
    id: '1',
    value: 'colored',
    label: 'Colored Theme',
  },
  {
    id: '2',
    value: 'light',
    label: 'Light Theme',
  },
  {
    id: '3',
    value: 'dark',
    label: 'Dark Theme',
  },
];

const { coloredTheme, lightTheme, darkTheme } = theme;

export const availableThemes = {
  colored: coloredTheme,
  light: lightTheme,
  dark: darkTheme,
};
