import React from 'react'
import { ControlledInputProps } from './interfaces'
import * as S from './styles'

export function UnControlledInput(props: ControlledInputProps) {
  const { input, label, icon, width, renderIconOnDirection, register } = props
  return (
    <S.Container>
      {label && <label htmlFor={label.toString()}> {label}</label>}
      <S.Divider iconDirection={renderIconOnDirection}>
        {icon !== null && icon}
        <input
          id={label?.toString()}
          {...register(input.name)}
          {...input}
          autoComplete="off"
        />
      </S.Divider>
    </S.Container>
  )
}
