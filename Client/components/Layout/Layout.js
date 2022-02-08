import Head from 'next/head';
import { makeStyles, Grid, Typography, Divider, IconButton } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';

import clsx from 'clsx';
import theme from '../../src/theme/theme';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '24px 80px',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Grid className={classes.container}>{children}</Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
