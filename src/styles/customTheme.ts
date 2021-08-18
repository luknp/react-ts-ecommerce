import { createTheme } from '@material-ui/core/styles';

export const colorsLight = {
  type: 'light',
  primary: {
    light: '#33ab9f',
    main: '#009688',
    dark: '#00695f',
    contrastText: '#fff',
  },
  secondary: {
    light: '#fff',
    main: '#005b53',
    dark: '#fff',
    contrastText: '#fff',
  },
  background: {
    paper: '#fff',
    default: '#00968810',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
  },
};

export const colorsDark = {
  type: 'dark',
  primary: {
    light: '#33ab9f',
    main: '#009688',
    dark: '#00695f',
    contrastText: '#fff',
  },
  secondary: {
    light: '#fff',
    main: '#e4fffd',
    dark: '#fff',
    contrastText: '#fff',
  },
  background: {
    paper: '#424242',
    default: '#333',
  },
  text: {
    primary: '#fff',
  },
};

export const getColorPalette = (isDarkMode: boolean) => {
  if (isDarkMode) {
    return colorsDark;
  }
  return colorsLight;
};

const customTheme = (isDarkMode: boolean) =>
  createTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: {
        main: getColorPalette(isDarkMode).primary.main,
        light: getColorPalette(isDarkMode).primary.light,
      },
      secondary: {
        main: getColorPalette(isDarkMode).secondary.main,
      },
      background: {
        paper: getColorPalette(isDarkMode).background.paper,
        default: getColorPalette(isDarkMode).background.default,
      },
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: 'break-word',
        },
      },

      MuiBackdrop: {
        root: {
          backgroundColor: '#4A4A4A1A',
        },
      },
      MuiMenu: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
        },
      },
      MuiSelect: {
        icon: {
          color: '#B9B9B9',
        },
      },
      MuiTouchRipple: {
        child: {
          backgroundColor: 'white',
        },
      },
      MuiTableRow: {
        root: {
          height: 56,
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: '1px solid rgba(224, 224, 224, .5)',
          paddingLeft: 24,
        },
        head: {
          fontSize: '0.95rem',
        },
        body: {
          fontSize: '0.95rem',
        },
      },
    },
  });

export default customTheme;
