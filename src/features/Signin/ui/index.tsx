import React from 'react'
import { FiMail } from 'react-icons/fi'
import { UnControlledInput } from '@/components/Form/UncontrolledInput'
import logo from '@/assets/img/svg/welcome.svg'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <img src={logo} alt="welcome svg" />
      <S.Form>
        <UnControlledInput
          label="E-mail"
          input={{
            name: 'email',
            placeholder: 'Seu e-mail de acesso',
            type: 'email',
          }}
        />
        <UnControlledInput
          label="Senha"
          input={{
            name: 'password',
            placeholder: 'Informe sua senha',
            type: 'password',
          }}
        />
      </S.Form>
    </S.Container>
  )
}
