import React from 'react'
import homeLogo from '@/assets/img/svg/home.svg'
import historicLogo from '@/assets/img/svg/historic.svg'
import menuLogo from '@/assets/img/svg/menu.svg'
import usersLogo from '@/assets/img/svg/group.svg'
import { SideBarProps } from '../interfaces'

const options: SideBarProps[] = [
  {
    title: 'Home',
    icon: () => <img src={homeLogo} alt="historic logo" />,
    pathName: '/home/records',
  },

  {
    title: 'Historico',
    icon: () => <img src={historicLogo} alt="historic logo" />,
    pathName: '/home/records',
  },

  {
    title: 'Cardapio',
    icon: () => <img src={menuLogo} alt="menu historic" />,
    pathName: '/home/records',
  },

  {
    title: 'Usuários',
    icon: () => <img src={usersLogo} alt="menu historic" />,
    pathName: '/home/records',
  },
]

export { options }
