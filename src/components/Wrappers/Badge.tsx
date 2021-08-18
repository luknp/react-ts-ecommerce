import React from 'react';
import { Badge as BadgeBase } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/styles';
import { getColor, createStyled } from 'utils/material-ui';
import { Theme } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme: Theme) => ({
  badge: {
    fontWeight: 600,
    height: 16,
    minWidth: 16,
  },
}));

type Props = {
  colorBrightness?: string;
  color: string;
  [x: string]: any;
};

const Badge: React.FC<Props> = ({ colorBrightness, color, children, ...props }) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const Styled = createStyled({
    badge: {
      backgroundColor: getColor(color, theme, colorBrightness),
    },
  });

  return (
    <Styled>
      {styledProps => (
        <BadgeBase
          classes={{
            badge: classnames(classes.badge, styledProps.classes.badge),
          }}
          {...props}
        >
          {children}
        </BadgeBase>
      )}
    </Styled>
  );
};

export default Badge;
