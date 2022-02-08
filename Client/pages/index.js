import { makeStyles, Typography, Grid } from '@material-ui/core';
import Header from '../components/Header';

import globalStyles from '../styles/globalStyles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const Main = () => {
  const gClasses = globalStyles();
  const classes = useStyles();

  return (
    <>
      <Header title='App Name' description='desc' />
      <Grid className={gClasses.flexColumnCenter}>
        <Typography variant='h6' color='initial'>
          Main
        </Typography>
      </Grid>
    </>
  );
};

export default Main;

export const getStaticProps = async context => {
  return {
    props: {},
  };
};

export const getServerSideProps = async context => {
  return {
    props: {},
  };
};
