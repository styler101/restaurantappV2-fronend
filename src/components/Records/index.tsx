import React from 'react'
import { RecordsProps } from './interfaces'
import { TableHeader } from './components'
import * as S from './styles'

export function Records(props: RecordsProps) {
  const { header } = props
  return (
    <S.Container>
      <TableHeader header={header} />
    </S.Container>
  )
}
