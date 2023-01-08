import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Signin } from '@/pages/Signin/index'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'

export function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Signin />
      <GlobalStyles />
    </ThemeProvider>
  )
}
