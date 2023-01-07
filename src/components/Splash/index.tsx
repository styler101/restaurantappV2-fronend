import React from 'react'
import logo from '@/assets/img/svg/logo.svg'
import * as S from './styles'

export function Splash() {
  return (
    <S.Container>
      <img src={logo} alt="logo" />
    </S.Container>
  )
}
