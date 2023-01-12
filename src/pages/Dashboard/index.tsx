import React from 'react'
import { Header } from '@/components/Header'
import homeLogo from '@/assets/img/svg/customhome.svg'
import * as S from './styles'

export function Dashboard() {
  return (
    <S.Container>
      <Header
        data={{
          title: 'Home',
          icon: <S.Icon src={homeLogo} />,
          description: 'Acompanhe os pedidos dos clientes',
        }}
      />
    </S.Container>
  )
}
