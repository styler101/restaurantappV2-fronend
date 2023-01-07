import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'
import { Signin } from '@/pages/Signin'

export function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Signin />
      <GlobalStyles />
    </ThemeProvider>
  )
}
