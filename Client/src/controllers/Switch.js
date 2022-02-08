import React from 'react';
import { FormControl, FormControlLabel, Switch as MuiSwitch } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({}));

const Switch = ({ name, label, value, onChange }) => {
  // const classes = useStyles();

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <>
      <FormControl>
        <FormControlLabel
          control={
            <MuiSwitch
              name={name}
              color='primary'
              checked={value}
              onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
            />
          }
          label={label}
        />
      </FormControl>
    </>
  );
};

export default Switch;
