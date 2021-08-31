import React from 'react';
import { getColor, getFontWeight, getFontSize } from 'utils/material-ui';
import { Theme } from '@material-ui/core/styles';
import { Typography as TypographyBase } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

type Props = {
  colorBrightness?: string;
  color?: string;
  weight?: string;
  size?: string;
  [x: string]: any;
  children: React.ReactNode;
};
function Typography(props: Props): React.ReactElement {
  const theme: Theme = useTheme();
  const { children, weight = 'medium', size = 'sm', colorBrightness, color = 'primary' } = props;

  return (
    <TypographyBase
      style={{
        color: getColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, undefined, theme),
      }}
      // {...props}
    >
      {children}
    </TypographyBase>
  );
}

export default Typography;
