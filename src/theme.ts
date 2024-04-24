export const tokens = {
  primary: {
    100: '#d0f1ed',
    200: '#a1e3db',
    300: '#72d4ca',
    400: '#43c6b8',
    500: '#14b8a6',
    600: '#109385',
    700: '#0c6e64',
    800: '#084a42',
    900: '#042521',
  },
  grey: {
    100: '#dbdde0',
    200: '#b7bbc1',
    300: '#9399a1',
    400: '#6f7782',
    500: '#4b5563',
    600: '#3c444f',
    700: '#2d333b',
    800: '#1e2228',
    900: '#0f1114',
  },
  secondary: {
    100: '#fdecce',
    200: '#fbd89d',
    300: '#f9c56d',
    400: '#f7b13c',
    500: '#f59e0b',
    600: '#c47e09',
    700: '#935f07',
    800: '#623f04',
    900: '#312002',
  },
  tertiary: {
    500: '#8884d8',
  },
  background: {
    light: '#2d2d34',
    main: '#1f2026',
  },
};

export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ['Barlow', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h2: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h3: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
