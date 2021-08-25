import React from 'react';
import { Badge as BadgeBase } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/styles';
import { getColor } from 'utils/material-ui';
import { Theme } from '@material-ui/core/styles';
import classnames from 'classnames';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

type Props = {
  colorBrightness?: string;
  color: string;
  [x: string]: any;
};

const Badge: React.FC<Props> = ({ colorBrightness, color, children, ...props }) => {
  const theme: Theme = useTheme();

  const useStyles = makeStyles((theme: Theme) => ({
    badge: {
      fontWeight: 600,
      height: 16,
      minWidth: 16,
      backgroundColor: getColor(color, theme, colorBrightness),
    },
  }));
  const classes = useStyles();

  return (
    <BadgeBase
      classes={{
        badge: classnames(classes.badge),
      }}
      {...props}
    >
      {children}
    </BadgeBase>
  );
};

export default Badge;
