import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    margin: '100px 15% 0px 15%',
    paddingTop: '32px',

    [theme.breakpoints.down('md')]: {
      margin: '64px 100px',
    },

    [theme.breakpoints.down('xs')]: {
      margin: '64px',
    },
  },

  subRoot: {
    margin: '130px 15%',

    [theme.breakpoints.down('md')]: {
      margin: '64px 100px',
    },

    [theme.breakpoints.down('xs')]: {
      margin: '64px',
    },
  },

  flexRowStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRowEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  flexRowBtw: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexColumnStart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexColumnEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  flexColumnBtw: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  w100: {
    width: '100%',
  },

  btn01: {
    width: '120px',
    height: '40px',
    background: '#363A4A',
    color: '#fff',
    border: '1px solid #00000000',
    borderRadius: '4px',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#fafafa',
      color: '#363A4A',
      border: '1px solid #363A4A',
      borderRadius: '4px',
      fontWeight: '600',
    },
  },

  btn02: {
    width: '120px',
    height: '40px',
    background: '#fafafa',
    color: '#363A4A',
    border: '1px solid #00000000',
    borderRadius: '4px',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#363A4A',
      color: '#fff',
      border: '1px solid #363A4A',
      borderRadius: '4px',
      fontWeight: '600',
    },
  },

  btn03: {
    width: '120px',
    height: '40px',
    background: '#fafafa',
    color: '#363A4A',
    border: '1px solid #363A4A',
    borderRadius: '4px',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#363A4A',
      color: '#fff',
      borderRadius: '4px',
      fontWeight: '600',
    },
  },

  btn04: {
    width: '120px',
    height: '40px',
    background: '#fafafa',
    color: '#363A4A',
    border: '1px solid #fff',
    borderRadius: '4px',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#363A4A',
      color: '#fff',
      borderRadius: '4px',
      fontWeight: '600',
    },
  },

  // Tablet devices
  tablet: {
    [theme.breakpoints.up('md')]: {
      margin: '24px !important',
    },
  },

  tabletW100: {
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },

  tabletW90: {
    [theme.breakpoints.down('md')]: {
      width: '90% !important',
    },
  },

  tabletFlexColumnStart: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },

  tabletFlexColumnCenter: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  tabletNonPadding: {
    [theme.breakpoints.down('md')]: {
      margin: '16px 0px 40px 0px',
      padding: '0px !important',
    },
  },

  tabletNonMargin: {
    [theme.breakpoints.down('md')]: {
      padding: '16px 0px 40px 0px',
      margin: '0px !important',
    },
  },

  tabletUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  tabletDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  tabletUpVisible: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  tabletDownVisible: {
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },

  // Mobile devices
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  mobileW100: {
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },

  mobileW80: {
    [theme.breakpoints.down('sm')]: {
      width: '80% !important',
    },
  },

  mobileFlexRowCenter: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  mobileFlexColumnStart: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },

  mobileFlexRColumnStart: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },

  mobileFlexColumnCenter: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex !important',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  mobilePadding: {
    [theme.breakpoints.down('sm')]: {
      padding: '8px 0',
    },
  },

  mobileNonPadding: {
    [theme.breakpoints.down('sm')]: {
      margin: '16px 0px 40px 0px',
      padding: '0px !important',
    },
  },

  mobileNonMargin: {
    [theme.breakpoints.down('sm')]: {
      padding: '16px 0px 40px 0px',
      margin: '0px !important',
    },
  },

  mobileVisible: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));
