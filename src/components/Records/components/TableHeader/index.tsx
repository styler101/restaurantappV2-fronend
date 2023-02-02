import React from 'react'
import * as S from './styles'
import { ComponentProps } from './interfaces'

export function TableHeader(props: ComponentProps) {
  const { header } = props
  return (
    <S.Container>
      <tr>
        {header.map((item, index) => (
          <th key={index}> {item.content}</th>
        ))}
      </tr>
    </S.Container>
  )
}
