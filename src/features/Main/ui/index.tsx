import React from 'react'
import { options } from '@/components/SideBar/options/sideBarRenderList'
import { SideBar } from '@/components'
import * as S from './styles'
import { Outlet } from 'react-router-dom'

export function Ui() {
  return (
    <S.Container>
      <SideBar options={options} />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  )
}
