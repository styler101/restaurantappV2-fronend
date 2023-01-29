import React from 'react'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'
import { Routes } from '@/routes'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />

      <GlobalStyles />
    </ThemeProvider>
  )
}
