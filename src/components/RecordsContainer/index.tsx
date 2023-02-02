import React, { PropsWithChildren } from 'react'
import * as S from './styles'

type ComponentProps = PropsWithChildren

export function RecordsContainer(props: ComponentProps) {
  const { children } = props
  return <S.Container>{children}</S.Container>
}
