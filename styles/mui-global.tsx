import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    circleBtn: true;
  }
}
const paletteColor={
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
  }
}

const theme = createTheme({
  palette: {
    primary: paletteColor.primary,
    secondary: paletteColor.secondary,
    action:{
      focus: 'red',
    }
  },
  components: {
    MuiButton:{
      variants:[
        {
          props: { variant: 'circleBtn' },
          style: {
            borderRadius: '50%'
          },
        }
      ],
      styleOverrides:{
        containedPrimary:{
          '&:hover':{
            backgroundColor: paletteColor.secondary.main,
            color: paletteColor.primary.dark,
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
  //   MuiOutlinedInput:{// focused color for input with variant='outlined'
  //     styleOverrides:{
  //       root: {
  //         '& fieldset': {
  //           borderColor: 'red',
  //         },
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
  //       }
  //     },
  //   },
  }
});

  export default theme;