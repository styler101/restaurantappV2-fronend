import React from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Board } from '../components/Board'
import homeLogo from '@/assets/img/svg/header/customhome.svg'
import mock from '../data/index.json'
import * as S from './styles'

export function Ui() {
  console.log(mock.data.filter((item) => item.type === 'WAITING'))
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
        <Board
          type="WAITING"
          cards={mock.data.filter((item) => item.type === 'WAITING')}
        />
        <Board
          type="IN_PROGRESS"
          cards={mock.data.filter((item) => item.type === 'IN_PROGRESS')}
        />
        <Board
          type="DONE"
          cards={mock.data.filter((item) => item.type === 'DONE')}
        />
      </Container>
    </S.Container>
  )
}
