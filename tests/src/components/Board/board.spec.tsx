import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { render } from '@testing-library/react'
import { Board } from '@/features/Dashboard/components/Board'
import { BoardType } from '@/features/Dashboard/components/Board/interface'
import 'react-beautiful-dnd'

describe('Board Component', () => {
  test('Ensure that board component be render correctly', () => {
    const mockData: BoardType = {
      data: {
        type: 'DONE',
        cards: [{ id: 1, type: 'string', name: 'string', quantity: 0 }],
      },
    }
    render(
      <DragDropContext onDragEnd={() => {}}>
        <Board data={mockData.data} />
      </DragDropContext>
    )
  })

  test('Ensure that board component be render with a correct type', () => {
    const typeOptions = ['WAITING', 'IN_PROGRESS', 'DONE']
    const mockData: any = {
      data: {
        type: 'DONE',
        cards: [{ id: 1, type: 'string', name: 'string', quantity: 0 }],
      },
    }
    render(
      <DragDropContext onDragEnd={() => {}}>
        {' '}
        <Board data={mockData.data} />{' '}
      </DragDropContext>
    )
    expect(typeOptions).toContain(mockData.data.type)
  })
})
