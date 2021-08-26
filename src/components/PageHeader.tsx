import React from 'react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useMainPageStyles } from 'styles/muiStyles';
import AssignmentIcon from '@material-ui/icons/Assignment';

type Props = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: Props) {
  const classes = useMainPageStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Paper className={classes.headerPaper}>
      <AssignmentIcon fontSize='large' color='primary' className={classes.headerIcon} />
      <div>
        <Typography variant={isMobile ? 'h6' : 'h5'} color='secondary'>
          {title}
        </Typography>
        <Typography variant={isMobile ? 'caption' : 'subtitle1'} color='secondary'>
          {description}
        </Typography>
      </div>
    </Paper>
  );
}
