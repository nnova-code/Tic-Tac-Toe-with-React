import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this appthe
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F7AEF8',
    },
    secondary: {
      main: '#72DDF7',
    },
    error: {
      main: '#B388EB',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
