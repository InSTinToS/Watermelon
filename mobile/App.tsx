import React from 'react'

import Home from './src/pages/home'
import theme from './src/styles/themes'

import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)

export default App
