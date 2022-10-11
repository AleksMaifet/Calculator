const fontFamily = 'sans-serif';
const fontSizeBase = '10px';

/// Colors
const Colors = {
  black: '#000000',
  white: '#ffffff',
  error: '#c86464',
  primary: '#c06c84',
  secondary: '#6c5b7b',
  secondaryLight: '#6a6b7b',
  gray: '#707070',
  darkGray: '#434343',
  pink: '#f5a6c3',
  smokyWhite: '#f2f2f2',
  neutral: '#acaaaa',
};

/// Shadow
const boxShadows = ['box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)'];

/// Size
const size = {
  xs: 550,
  small: 768,
  md: 1000,
  large: 1200,
};

/// Space
const spaces = [0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];

/// Opacity
const opacity = {
  opacity0: 0,
  opacity50: 0.5,
  opacity100: 1,
};

/// TextStyle
const textStyle = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xll: 5,
};

/// Dark vers.
export const darkTheme = {
  appBackgroundColor: Colors.darkGray,
};

/// Light vers.
export const lightTheme = {
  appBackgroundColor: Colors.secondaryLight,
};

/// Based
export const basedTheme = {
  appBackgroundColor: Colors.neutral,
};

export default {
  boxShadows,
  fontFamily,
  fontSizeBase,
  size,
  spaces,
  opacity,
  textStyle,
  Colors,
};
