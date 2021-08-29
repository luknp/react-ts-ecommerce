import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { clearNotification, selectNotificationState } from 'redux/slices/notificationSlice';

const useStyles = makeStyles(theme => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 75,
    },
  },
}));

const ToastNotification = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { message, type } = useAppSelector(selectNotificationState);

  const clearNotif = () => {
    dispatch(clearNotification());
  };
  if (!message || !type) return null;

  return (
    <Snackbar
      open={!!message}
      onClose={clearNotif}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      className={classes.snackbar}
    >
      <Alert onClose={clearNotif} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;
