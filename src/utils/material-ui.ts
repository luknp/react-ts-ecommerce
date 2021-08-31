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

export function getFontWeight(style: string) {
  switch (style) {
    case 'light':
      return 300;
    case 'medium':
      return 500;
    case 'bold':
      return 600;
    default:
      return 400;
  }
}

export function getFontSize(size: string, variant = '', theme: Theme) {
  let multiplier;

  switch (size) {
    case 'sm':
      multiplier = 0.8;
      break;
    case 'md':
      multiplier = 1.5;
      break;
    case 'xl':
      multiplier = 2;
      break;
    case 'xxl':
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }
  // const defaultSize = variant && theme?.typography[variant] ? theme.typography[variant].fontSize : `${theme.typography.fontSize}px`;
  const defaultSize = 12;
  return `calc(${defaultSize} * ${multiplier})`;
}
