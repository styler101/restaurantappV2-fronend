import React from 'react'
import { Board } from '../components/Board'
import { Header, Container } from '@/components'
import { useDashboard } from '../context'
import homeLogo from '@/assets/img/svg/header/customhome.svg'
import * as S from './styles'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

export function Ui() {
  const { itens, setItens, filterItemsByType } = useDashboard()

  function handleDrop(event: DropResult) {
    if (!event.destination) return
  }
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
          <DragDropContext onDragEnd={handleDrop}>
            <Board
              data={{
                type: 'WAITING',
                cards: filterItemsByType('WAITING'),
              }}
            />
            <Board
              data={{
                type: 'IN_PROGRESS',
                cards: filterItemsByType('IN_PROGRESS'),
              }}
            />
            <Board
              data={{
                type: 'DONE',
                cards: filterItemsByType('DONE'),
              }}
            />
          </DragDropContext>
        </S.Wrapper>
      </Container>
    </S.Container>
  )
}
