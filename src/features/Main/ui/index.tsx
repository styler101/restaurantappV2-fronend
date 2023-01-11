import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '@/components/SideBar/index'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <SideBar />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  )
}
