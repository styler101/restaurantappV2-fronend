import React from 'react'
import { ContainerProps } from './interfaces'
import * as S from './styles'

export function Container(props: ContainerProps) {
  const { children } = props
  return <S.Container>{children}</S.Container>
}
