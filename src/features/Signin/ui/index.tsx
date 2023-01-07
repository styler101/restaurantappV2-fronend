import React, { useEffect } from 'react'
import { FaEye } from 'react-icons/fa'
import { Button, UnControlledInput } from '@/components/Form'
import { Splash } from '@/components/Splash'
import logo from '@/assets/img/svg/welcome.svg'
import * as S from './styles'

export function Ui() {
  const [showSplash, setShowSplash] = React.useState<boolean>(true)
  const timer = setTimeout(() => setShowSplash(false), 1000)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return showSplash ? (
    <Splash />
  ) : (
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
          icon={<FaEye color="#ccc" />}
          renderIconOnDirection="right"
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
