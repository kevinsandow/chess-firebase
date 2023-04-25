import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './main.css'
import FirebaseProvider from "./providers/FirebaseProvider";
import UserProvider from "./providers/UserProvider";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <FirebaseProvider>
        <UserProvider>
          <App/>
        </UserProvider>
      </FirebaseProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
