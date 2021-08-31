import { createTheme } from '@material-ui/core/styles';

type ColorType = 'light' | 'dark';

export const colorsLight = {
  type: 'light' as ColorType,
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
    default: '#fafafa',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.12)',
  },
};

type ColorPalette = typeof colorsLight;

export const colorsDark: ColorPalette = {
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
    default: '#303030',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
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
      text: {
        primary: getColorPalette(isDarkMode).text.primary,
        secondary: getColorPalette(isDarkMode).text.secondary,
        disabled: getColorPalette(isDarkMode).text.disabled,
        hint: getColorPalette(isDarkMode).text.hint,
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
          // boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
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

export const saveColorsIntoCss = (isDarkMode: boolean) => {
  const colorPalette = getColorPalette(isDarkMode);
  for (const key in colorPalette) {
    const value = colorPalette[key as keyof ColorPalette];
    if (typeof value === 'object') {
      for (const key2 in value) {
        const value2 = value[key2 as keyof typeof value];
        saveVarIntoCss(`--color-${key}-${key2}`, value2);
      }
    } else {
      saveVarIntoCss(`--color-${key}`, value);
    }
  }
};

const saveVarIntoCss = (key: string, value: string) => {
  const body = document.querySelector('body');
  if (body) {
    body.style.setProperty(key, value);
  }
};
