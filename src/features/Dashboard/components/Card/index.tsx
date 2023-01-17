import React from 'react'
import { CardProps, ComponentProps } from './interfaces'
import * as S from './styled'

export function Card(props: ComponentProps) {
  const { name, quantity } = props.data
  return (
    <S.Container>
      <strong> {name} </strong>
      <span> {quantity} itens</span>
    </S.Container>
  )
}
