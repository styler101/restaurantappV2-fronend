import React from 'react'
import { render } from '@testing-library/react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Board } from '@/features/Dashboard/components/Board'

const makeOptions = () => ['WAITING', 'IN_PROGRESS', 'DONE']

const makeMock = () => ({
  type: 'DONE',
  cards: [{ id: 1, type: 'string', name: 'string', quantity: 0 }],
})

describe('Board Component', () => {
  test('Ensure that board component be render correctly', () => {
    const mockData: any = makeMock()
    render(
      <DragDropContext onDragEnd={() => {}}>
        <Board data={mockData} />
      </DragDropContext>
    )
  })

  test('Ensure that board component be render with a correct type', () => {
    const typeOptions = makeOptions()
    const mockData: any = makeMock()

    render(
      <DragDropContext onDragEnd={() => {}}>
        {' '}
        <Board data={mockData} />{' '}
      </DragDropContext>
    )
    expect(typeOptions).toContain(mockData.type)
  })

  test('Ensure that board component be render with no cards itens', () => {
    const typeOptions = makeOptions()
    const mockData: any = {
      type: typeOptions[0],
      cards: [],
    }
    render(
      <DragDropContext onDragEnd={() => {}}>
        <Board data={mockData} />
      </DragDropContext>
    )
    expect(mockData.cards.length).toEqual(0)
  })
})
