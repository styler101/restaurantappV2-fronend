import React, { useCallback } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Board } from '../components/Board'
import homeLogo from '@/assets/img/svg/header/customhome.svg'
import { useDashboard } from '../context'
import * as S from './styles'

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
