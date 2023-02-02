import React from 'react'
import * as S from './styles'
import { ComponentProps } from './interfaces'

export function TableHeader(props: ComponentProps) {
  const { header } = props
  return (
    <S.Container>
      {header.map((item, index) => (
        <td key={index}> {item.content}</td>
      ))}
    </S.Container>
  )
}
