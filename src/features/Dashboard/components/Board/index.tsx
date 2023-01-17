import React from 'react'
import { Card } from '../Card'
import { BoardType } from './interface'
import { labels } from './labels'
import * as S from './styles'

export function Board(props: BoardType) {
  const { type, cards } = props
  return (
    <S.Kanban>
      <header>
        {labels[type].icon}
        <strong>
          {labels[type].name}
          <span> 0 </span>
        </strong>
      </header>
      <S.CardsWrapper>
        {cards.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </S.CardsWrapper>
    </S.Kanban>
  )
}
