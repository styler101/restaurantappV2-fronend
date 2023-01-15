import React from 'react'
import { ErrorField } from '@/components/Form/ErrorField'
import { FromGroupProps } from './interfaces'
import * as S from './styles'

export function FormGroup(props: FromGroupProps) {
  const { children, error } = props

  return (
    <S.Container>
      <S.Wrapper error={Boolean(error)}>{children}</S.Wrapper>
      {error !== undefined && <ErrorField message={error} />}
    </S.Container>
  )
}
