import React from 'react'
import * as S from './styles'
import { BiSad } from 'react-icons/bi'

export function Error404() {
  return (
    <S.Container>
      <BiSad color="#ccc" size={80} />
      <h2> Página não Encontrada!</h2>
    </S.Container>
  )
}
