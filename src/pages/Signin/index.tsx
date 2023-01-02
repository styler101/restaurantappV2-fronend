import React from 'react'
import logo from '@/assets/img/svg/welcome.svg'
import { Input } from '@/components/Form'
import { Splash } from '@/components/Splash'

import * as S from './styles'

export function Signin() {
  const [isVisible, setIsVisible] = React.useState<boolean>(true)
  return (
    <S.Container>
      {isVisible && (
        <Splash isVisible={isVisible} setIsVisible={setIsVisible} />
      )}

      {!isVisible && (
        <S.Form>
          <S.FormContainer>
            <img src={logo} />
            <Input />
          </S.FormContainer>
        </S.Form>
      )}
    </S.Container>
  )
}
