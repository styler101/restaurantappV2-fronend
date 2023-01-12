import React from 'react'
import homeLogo from '@/assets/img/svg/home.svg'
import historicLogo from '@/assets/img/svg/historic.svg'
import menuLogo from '@/assets/img/svg/menu.svg'
import logoText from '@/assets/img/svg/logotext.svg'
import usersLogo from '@/assets/img/svg/group.svg'
import profileLogo from '@/assets/img/svg/profile.svg'
import powerOff from '@/assets/img/svg/poweroff.svg'

import * as S from './styles'

export function SideBar() {
  return (
    <S.Container>
      <header>
        <img src={logoText} alt="logo text" />
      </header>
      <S.List>
        <S.ListItem>
          <img src={homeLogo} alt="logo" />
          <span> Home</span>
          <div />
        </S.ListItem>
        <S.ListItem>
          <img src={historicLogo} alt="historic logo" />
          <span> Histórico </span>
        </S.ListItem>
        <S.ListItem>
          <img src={menuLogo} alt="menu historic" />
          <span> Cardapio </span>
        </S.ListItem>
        <S.ListItem>
          <img src={usersLogo} alt="group" />
          <span> Usuários </span>
        </S.ListItem>
      </S.List>
      <S.Footer>
        <S.ListItem>
          <img src={profileLogo} alt="profile-logo" />
          <span> Perfil</span>
        </S.ListItem>
        <S.ListItem>
          <img src={powerOff} alt="profile-logo" />
          <span> Sair </span>
        </S.ListItem>
      </S.Footer>
    </S.Container>
  )
}
