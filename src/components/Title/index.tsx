import React from 'react'
import * as S from './styles'
import { TitleProps } from './interfaces'

export function Title(props: TitleProps) {
  const { quantity, title } = props.data

  return (
    <S.Title>
      {title} <span>{quantity}</span>
    </S.Title>
  )
}
