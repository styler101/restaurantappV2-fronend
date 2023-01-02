import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import theme from '../../assets/theme/index'
import { Ui } from '../../pages/Signin/ui'

import * as S from './styles'

export function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <S.Container>
        <Ui />
        <GlobalStyles />
      </S.Container>
    </ThemeProvider>
  )
}
