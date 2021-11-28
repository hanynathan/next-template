import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    circleBtn: true;
  }
}

declare module '@mui/material/styles'{
  interface Palette {
    foucsColor?: Palette['primary'];
  }
  interface PaletteOptions {
    foucsColor?: PaletteOptions['primary'];
  }
}

const otherColor = {
  
}

let theme = createTheme({
  palette: {
    primary: {
      light: '#84ffff',
      main: '#18ffff',
      dark: '#00e5ff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1e88e5',
      main: '#1976d2',
      dark: '#ffff00',
      contrastText: '#000',
    },
    foucsColor:{
      light: '#1e88e5',
      main: '#1976d2',
      dark: '#ffff00',
      contrastText: '#000',
    },
    action: {
      focus: 'red',
    }
  },
});
theme = createTheme(theme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'circleBtn' },
          style: {
            borderRadius: '50%'
          },
        }
      ],
      styleOverrides: {
        containedPrimary: {
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.dark,
          }
        }
      }
    },
    //   MuiInputBase: {
    //     styleOverrides:{
    //       input: {
    //         "& :hover fieldset": {
    //           borderColor: 'yellow',
    //         }
    //       }
    //     }
    //   },
    //   MuiInput:{// focused color for input with variant='standard'
    //     styleOverrides:{
    //       underline:{
    //         ":after":{
    //         }
    //       },
    //     }
    //   },
    //   MuiFilledInput:{// focused color for input with variant='filled'
    //     styleOverrides:{
    //       underline:{
    //         ":after":{
    //         }
    //       },
    //     }
    //   },
    MuiOutlinedInput: {// focused color for input with variant='outlined'
      styleOverrides: {
        input: {
        },
        root: {
          //         '&.Mui-focused':{
          //           color: 'red',
          //           fontSize: '4rem',
          //         },
          //         '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
          //           borderColor: '#fff',
          //         },
          //         '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
          //           borderColor: 'yellow',
          //         },
          '& input:valid + fieldset': {
            borderLeftColor: theme.palette.success.main,
          },
          '& input:invalid + fieldset': {
            borderLeftColor: theme.palette.error.main,
          },
          '& input:valid:focus + fieldset': {
            borderLeftColor: theme.palette.secondary.main,
            borderLeftWidth: 10,
          },
          '& input:invalid:focus + fieldset': {
            borderLeftColor: theme.palette.error.main,
            borderLeftWidth: 10,
          },
          '& input:focus + fieldset':{
            // boxShadow: `0 0 1rem 0.25rem ${alpha(theme.palette.primary.main, 0.5)}`,
            boxShadow: `0 0 0.5rem 0.1rem ${alpha(theme.palette.primary.main, 0.5)} inset`,
            transition: 'box-shadow 0.15s ease-in-out',
            padding: '4px !important', // override inline-style
          },
          '& input + fieldset': {
            borderLeftWidth: 10,
          },
          '& input':{
            
          },
        }
      },
    },
  }
});

export default theme;