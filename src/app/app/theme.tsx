import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#546e7a',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  // overrides: {
  //   MuiDrawer: {
  //     paper: {
  //       minWidth: 300,
  //     },
  //     paperAnchorDockedLeft: {
  //       borderRight: 'none',
  //     },
  //   },
  // },
});

export default responsiveFontSizes(theme);
