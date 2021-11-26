import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/mui-global';
import '../styles/mui-global.css';
import { StyledEngineProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
