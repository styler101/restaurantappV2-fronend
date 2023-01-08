import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'
import { Routes } from '@/routes'
import { store, persistore } from '@/store'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <PersistGate persistor={persistore}>
          <Routes />
        </PersistGate>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}
