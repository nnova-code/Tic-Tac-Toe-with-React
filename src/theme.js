import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this appthe
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F4F4ED',
    },
    secondary: {
      main: '#72DDF7',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
