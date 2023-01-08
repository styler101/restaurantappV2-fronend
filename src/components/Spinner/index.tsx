import React from 'react'
import { SpinnerProps } from './interfaces'
import * as S from './styles'

export function Spinner(props: SpinnerProps) {
  const { height, width } = props

  return <S.Container width={width} height={height} />
}
