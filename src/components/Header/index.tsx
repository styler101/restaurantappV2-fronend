import React from 'react'
import { HeaderProps } from './interfaces'
import * as S from './styles'

export function Header(props: HeaderProps) {
  const { title, icon, description, extraTitleContent } = props.data
  return (
    <S.Container>
      <header>
        <div>
          {icon}
          <h2> {title} </h2>
        </div>
        {extraTitleContent}
      </header>
      <p> {description}</p>
    </S.Container>
  )
}
