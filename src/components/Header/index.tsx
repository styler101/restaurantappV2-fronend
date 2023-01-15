import React from 'react'
import { HeaderProps } from './interfaces'
import * as S from './styles'

export function Header(props: HeaderProps) {
  const { title, icon, description, extraTitleContent } = props.data
  return (
    <S.Container>
      <header>
        <S.LeftContent>
          {icon}
          <h2> {title} </h2>
        </S.LeftContent>
        {extraTitleContent}
      </header>
      <p> {description}</p>
    </S.Container>
  )
}
