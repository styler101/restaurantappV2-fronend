import React from 'react'
import { HeaderProps } from './interfaces'
import { Timer } from '@/components/Timer'
import * as S from './styles'

export function Header(props: HeaderProps) {
  const { title, icon, description, extraTitleContent, showTimer } = props.data
  return (
    <S.Container>
      <header>
        <S.LeftContent>
          {icon}
          <h2> {title} </h2>
        </S.LeftContent>
        <S.RightContent>
          {showTimer && <Timer />}
          {extraTitleContent}
        </S.RightContent>
      </header>
      <p> {description}</p>
    </S.Container>
  )
}
