import { ptBR } from '@material-ui/core/locale';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
  {
    palette: {
      type: 'dark',
      primary: {
        light: '#c95145',
        main: '#931f1d',
        dark: '#5f0000',
      },
      secondary: {
        light: '#a4a4a4',
        main: '#757575',
        dark: '#494949',
      },
      error: {
        light: '#eeaebc',
        main: '#bb7e8c',
        dark: '#8a515f',
      },
      warning: {
        light: '#ffff86',
        main: '#ecf452',
        dark: '#b7c113',
      },
      info: {
        light: '#7d7dac',
        main: '#4f517d',
        dark: '#242950',
      },
      success: {
        light: '#397652',
        main: '#054a29',
        dark: '#002300',
      },
    },
  },
  ptBR,
);

export default theme;
