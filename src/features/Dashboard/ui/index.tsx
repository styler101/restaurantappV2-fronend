import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Board } from '../components/Board'
import homeLogo from '@/assets/img/svg/header/customhome.svg'
import mock from '../data/index.json'
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
          <DragDropContext onDragEnd={() => {}}>
            <Board
              data={{
                type: 'WAITING',
                cards: mock.data.filter((item) => item.type === 'WAITING'),
              }}
            />
            <Board
              data={{
                type: 'IN_PROGRESS',
                cards: mock.data.filter((item) => item.type === 'IN_PROGRESS'),
              }}
            />
            <Board
              data={{
                type: 'DONE',
                cards: mock.data.filter((item) => item.type === 'DONE'),
              }}
            />
          </DragDropContext>
        </S.Wrapper>
      </Container>
    </S.Container>
  )
}
