import React from 'react'

import SignInUp from './src/pages/SignInUp'
import theme from './src/styles/themes'

import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <SignInUp />
  </ThemeProvider>
)

export default App
