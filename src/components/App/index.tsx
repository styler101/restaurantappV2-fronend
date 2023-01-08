import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'
import { Routes } from '@/routes'
import { store } from '@/store'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}
