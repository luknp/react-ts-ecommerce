import { Theme } from '@material-ui/core/styles';

export const getColor = (color: string, theme: Theme, brigtness = 'main'): string => {
  type PaletteColor = typeof theme.palette;
  const paletteColor = theme.palette[color as keyof PaletteColor];
  const paletteNestedColor = paletteColor[brigtness as keyof typeof paletteColor];

  if (paletteNestedColor) {
    return paletteNestedColor;
  } else {
    return theme.palette.primary.main;
  }
};
