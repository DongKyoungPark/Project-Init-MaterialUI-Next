import { createTheme } from '@material-ui/core/styles';

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    // type: 'light',
    // primary: { main: '#4D89FF' },
    // error: { main: '#EA4D4D' },
    // background: { default: '#FAFAFC', paper: '#FFFFFF', card: '#F6F6F6' },
    // text: { primary: '#282D35', secondary: '#3D4148', disabled: '#B6B9BF' },
  },
  // typography: { fontFamily: `"Noto Sans KR", "Roboto", "Helvetica", "Arial", "sans-serif"` },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
          overflowY: 'overlay',
        },
        // body: { color: '#5A5E66', backgroundColor: '#FBFBFC' },
        '#root': { position: 'relative' },
      },
    },
    MuiList: {
      padding: { paddingTop: 0, paddingBottom: 0 },
    },
  },
});

export default theme;
