import React from 'react'
import { ComponentProps } from './interfaces'
import * as S from './styled'

export function Card(props: ComponentProps) {
  const { provided } = props

  const { name, quantity } = props.data
  return (
    <S.Container
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}>
      <strong> {name} </strong>
      <span> {quantity} itens</span>
    </S.Container>
  )
}
