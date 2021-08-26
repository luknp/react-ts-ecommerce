import { makeStyles } from '@material-ui/core/styles';

export const useMainPageStyles = makeStyles(
  theme => ({
    root: {
      padding: '1em 0',
      [theme.breakpoints.down('xs')]: {
        padding: '0.5em 0.5em',
      },
    },
    headerPaper: {
      padding: '0.8em 1.5em',
      marginBottom: '2em',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: '0.3em 0.5em',
        marginBottom: '1em',
      },
    },
    headerIcon: {
      fontSize: '4.5em',
      marginRight: '0.2em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '3em',
        marginRight: '0.3em',
      },
    },
  }),
  { index: 1 },
);
