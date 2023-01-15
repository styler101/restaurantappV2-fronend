import React from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

import homeLogo from '@/assets/img/svg/header/customhome.svg'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        data={{
          title: 'Home',
          icon: <S.Icon src={homeLogo} />,
          description: 'Acompanhe os pedidos dos clientes',
          showTimer: true,
        }}
      />
      <Container>
        <S.Wrapper>
          <h1> Drag n Drop</h1>
        </S.Wrapper>
      </Container>
    </S.Container>
  )
}
