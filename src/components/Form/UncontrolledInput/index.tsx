import React from 'react'
import { ControlledInputProps } from './interfaces'
import * as S from './styles'

export function UnControlledInput(props: ControlledInputProps) {
  const { input, label, icon, width, renderIconOnDirection } = props
  return (
    <S.Container>
      {label && <label htmlFor={label.toString()}> {label}</label>}
      <S.Divider iconDirection={renderIconOnDirection}>
        {icon !== null && icon}
        <input id={label?.toString()} {...input} />
      </S.Divider>
    </S.Container>
  )
}
