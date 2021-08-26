import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0.5rem 1rem',
  },
});

export default function ProductCartSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton variant='rect' width='100%' height='20vh' />
    </div>
  );
}
