import React from 'react';
import {
  makeStyles,
  withStyles,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  selectRoot: {
    width: '100%',
    backgroundColor: '#fff',

    '& .MuiFormHelperText-contained': {
      margin: '0',
      padding: '8px 8px 0 8px',
      background: '#F6F7F9',
    },
  },
}));

const Select = ({
  variant,
  name,
  chip,
  label,
  value,
  error = null,
  onChange,
  options,
  initSelect,
  width,
  maxWidth,
  className,
  multiple = false,
  ...other
}) => {
  const classes = useStyles();

  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:hover': {
        color: '#fff',
        backgroundColor: '#2E3441',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  return (
    <FormControl
      variant={variant || 'outlined'}
      {...(error && { error: true })}
      style={{ width: width, maxWidth: maxWidth }}
      className={clsx(classes.selectRoot, className)}
    >
      {label ? <InputLabel>{label}</InputLabel> : null}
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        displayEmpty
        multiple={multiple}
        {...other}
      >
        {initSelect ? (
          <StyledMenuItem value='' disabled>
            {initSelect}
          </StyledMenuItem>
        ) : null}
        {options.map(item => (
          <StyledMenuItem key={item.id} value={item.id}>
            {item.title}
          </StyledMenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
export default Select;
