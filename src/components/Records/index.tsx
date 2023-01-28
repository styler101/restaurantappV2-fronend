import React from 'react'
import * as S from './styles'
import { RecordsProps } from './interfaces'
import { TableHeader } from './components'

export function Records(props: RecordsProps) {
  const { header } = props
  return (
    <S.Container>
      <TableHeader header={header} />
    </S.Container>
  )
}
