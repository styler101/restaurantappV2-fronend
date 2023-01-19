import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Card } from '../Card'
import { BoardType } from './interface'
import { labels, options } from './labels'
import * as S from './styles'

export function Board(props: BoardType) {
  const { type, cards, ...rest } = props.data
  return (
    <S.Kanban {...rest}>
      <header>
        {labels[type].icon}
        <strong>
          {labels[type].name}
          <span> 0 </span>
        </strong>
      </header>
      <Droppable droppableId={String(options[type])}>
        {(provided, snapshot) => (
          <S.CardsWrapper ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((item, index) => (
              <React.Fragment key={item.id}>
                <Draggable draggableId={String(item.id)} index={index}>
                  {(provided, snapshot) => (
                    <Card
                      key={String(item.id)}
                      data={item}
                      provided={provided}
                    />
                  )}
                </Draggable>
                {provided.placeholder}
              </React.Fragment>
            ))}
          </S.CardsWrapper>
        )}
      </Droppable>
    </S.Kanban>
  )
}
