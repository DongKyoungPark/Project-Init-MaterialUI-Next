import { useState } from 'react';
import { makeStyles, Grid, AppBar, Toolbar, Typography } from '@material-ui/core';

import { UseForm } from '../src/custom/UseForm';
import Controller from '../src/controllers/Controller';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    color: '#000',
  },

  divider: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const Navigation = () => {
  const classes = useStyles();

  // init values
  const initialValues = {};

  // validation
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    setErrors({ ...temp });
    if (fieldValues === values) return Object.values(temp).every(x => x === '');
  };

  const { values, errors, setErrors, handleInputChange } = UseForm(initialValues, true, validate);

  return (
    <>
      <AppBar position='fixed' className={classes.root}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Next
          </Typography>
          <Controller.Button
            disableFocusRipple={true}
            variant='text'
            color='inherit'
            text='App'
            style={{ margin: '0px', fontWeight: '600' }}
          />
        </Toolbar>
      </AppBar>

      <Grid className={classes.divider} />
    </>
  );
};

export default Navigation;
