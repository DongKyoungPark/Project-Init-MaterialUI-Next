import React from 'react';
import {
  makeStyles,
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  helperText: {
    position: 'absolute',
    top: '32px',
    left: '32px',
    width: '100%',
    color: '#f44336',
    paddingTop: '4px',
    fontSize: '0.6rem',
  },
}));

const Checkbox = ({ name, label, value, error, onChange, ...other }) => {
  const classes = useStyles();

  const convertToDefEventPara = (name, value) => ({
    target: { name, value },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <>
            <MuiCheckbox
              name={name}
              color='primary'
              checked={value}
              onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
              {...other}
            />
            <FormHelperText className={classes.helperText}>{error}</FormHelperText>
          </>
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
