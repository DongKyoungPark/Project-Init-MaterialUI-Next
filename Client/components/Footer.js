import { makeStyles, Grid, Typography, Divider, IconButton } from '@material-ui/core';

import clsx from 'clsx';
import globalUseStyles from '../styles/globalStyles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100px',
    padding: '24px',
    backgroundColor: '#fff',
    color: '#000',

    [theme.breakpoints.down('md')]: {
      height: 'max-content',
      padding: '50px',
    },
  },

  logo: {
    marginRight: '64px',
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      marginLeft: '8px',
    },
  },
}));

const Footer = () => {
  const gClasses = globalUseStyles();
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root}>
        <Typography variant='h6' style={{ width: '100%', textAlign: 'center' }}>
          Footer
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
