import React from 'react'

import { Button, UnControlledInput } from '@/components/Form'
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
        <Button type="submit" disabled={false}>
          Fazer Login
        </Button>
      </S.Form>
    </S.Container>
  )
}
