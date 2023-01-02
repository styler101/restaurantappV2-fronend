import React from 'react'
import logo from '@/assets/img/svg/welcome.svg'
import { Input } from '@/components/Form'
import { Splash } from '@/components/Splash'

import * as S from './styles'

export function Signin() {
  return (
    <S.Container>
      <Splash />
      <S.Form>
        <S.FormContainer>
          <img src={logo} />
          <Input />
        </S.FormContainer>
      </S.Form>
    </S.Container>
  )
}
