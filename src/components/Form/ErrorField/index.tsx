import React from 'react'
import { ErrorsFieldsProps } from './interfaces'
import { FiAlertCircle } from 'react-icons/fi'
import * as S from './styles'

export function ErrorField(props: ErrorsFieldsProps) {
  const { message } = props
  return (
    <S.Container>
      <FiAlertCircle size={16} color="#d73935" />
      {message}
    </S.Container>
  )
}
