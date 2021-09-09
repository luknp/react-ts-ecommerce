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

export const useActionCardStyles = makeStyles(
  theme => ({
    inputs: {
      display: 'flex',
      Width: '100%',
      alignItems: 'center',
      margin: '0.5rem',
      justifyContent: 'space-between',
      marginBottom: '1.5em',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '0.7em',
      },
    },
    icon: {},
    filterBarWrapper: {
      width: '25%',
      height: '2.5rem',
      margin: '1rem',
      border: '1px solid white',
      borderRadius: '0.2rem',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',

      [theme.breakpoints.down('xs')]: {
        width: '55%',
      },
    },
    sortBarWrapper: {
      width: '25%',
      [theme.breakpoints.down('xs')]: {
        width: '42%',
      },
    },
    filtersCarousel: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
  { index: 1 },
);

export const useFormStyles = makeStyles(
  theme => ({
    submitBtn: {
      margin: '1.5em 0',
      height: '3.2em',
    },
    avatar: {
      color: theme.palette.primary.main,
      backgroundColor: '#d3d3d3',
    },
    fieldMargin: {
      marginTop: '1.5em',
    },
    radioGroupForm: {
      marginTop: '0.8em',
      width: '100%',
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
    },
    radioGroupLabel: {
      marginRight: '2em',
    },
    formControlLabels: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: 'auto',
      },
    },
  }),
  { index: 1 },
);
