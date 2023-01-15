import React from 'react'
import homeLogo from '@/assets/img/svg/home.svg'
import redHomeLogo from '@/assets/img/svg/redhome.svg'
import historicLogo from '@/assets/img/svg/historic.svg'
import redHistoricLogo from '@/assets/img/svg/customorder.svg'
import redMenu from '@/assets/img/svg/redmenu.svg'
import redUsers from '@/assets/img/svg/redusers.svg'
import menuLogo from '@/assets/img/svg/menu.svg'
import usersLogo from '@/assets/img/svg/group.svg'
import { SideBarProps } from '../interfaces'

const options: SideBarProps[] = [
  {
    title: 'Home',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redHomeLogo} alt="home logo" />
      ) : (
        <img src={homeLogo} alt="home logo" />
      ),
    pathName: '/home/records',
  },

  {
    title: 'Historico',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redHistoricLogo} alt="historic logo" />
      ) : (
        <img src={historicLogo} alt="historic logo" />
      ),
    pathName: '/home/records',
  },

  {
    title: 'Cardapio',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redMenu} alt="menu logo" />
      ) : (
        <img src={menuLogo} alt="menu historic" />
      ),
    pathName: '/home/records',
  },

  {
    title: 'Usuários',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redUsers} alt="users logo" />
      ) : (
        <img src={usersLogo} alt="users logo" />
      ),
    pathName: '/home/records',
  },
]

export { options }
