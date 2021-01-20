import React from 'react'

import AppRouters from "./routers";

import ModeThemeProvider from './hooks/Context/ModeTheme/ModeThemeContext'
import AuthProvider from './hooks/Context/Auth/AuthContext'

function App() {
  return(
    <ModeThemeProvider>
      <AuthProvider>
        <AppRouters />
      </AuthProvider>
    </ModeThemeProvider>
  )
}

export default App;
