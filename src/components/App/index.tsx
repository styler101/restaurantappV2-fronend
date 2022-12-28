import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'
import GlobalStyles from '@/assets/styles/global'
import * as S from './styles'
export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <S.Container>
        <h1> App </h1>
        <GlobalStyles />
      </S.Container>
    </ThemeProvider>
  )
}
