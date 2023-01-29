import React from 'react'
import * as S from './styles'
import { ErrorsFieldsProps } from './interfaces'
import { FiAlertCircle } from 'react-icons/fi'

export function ErrorField(props: ErrorsFieldsProps) {
  const { message } = props
  return (
    <S.Container>
      <FiAlertCircle size={16} color="#d73935" />
      {message}
    </S.Container>
  )
}
