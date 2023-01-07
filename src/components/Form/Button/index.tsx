import React from 'react'
import { ButtonProps } from './interfaces'
import * as S from './styles'

export function Button(props: ButtonProps) {
  const { loading, children, disabled, ...rest } = props

  return (
    <S.Container {...rest} disabled={disabled}>
      {loading}
      {children}
    </S.Container>
  )
}
