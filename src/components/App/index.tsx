import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/theme'
import { Signin } from '@/pages/Signin'

import * as S from './styles'

export function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <S.Container>
        <Signin />
        <GlobalStyles />
      </S.Container>
    </ThemeProvider>
  )
}
