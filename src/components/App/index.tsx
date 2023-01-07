import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'
import { Signin } from '@/pages/Signin'
import { store } from '@/store'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <Signin />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}
