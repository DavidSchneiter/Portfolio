import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: '#191c32'
  },
});
darkTheme = responsiveFontSizes(darkTheme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
     </ThemeProvider>
  </React.StrictMode>
)
