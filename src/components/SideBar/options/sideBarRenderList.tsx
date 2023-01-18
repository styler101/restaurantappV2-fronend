import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import homeLogo from '@/assets/img/svg/sidebar/home.svg'
import redHomeLogo from '@/assets/img/svg/sidebar/redhome.svg'
import historicLogo from '@/assets/img/svg/sidebar/historic.svg'
import redHistoricLogo from '@/assets/img/svg/sidebar/customorder.svg'
import redMenu from '@/assets/img/svg/sidebar/redmenu.svg'
import redUsers from '@/assets/img/svg/sidebar/redusers.svg'
import menuLogo from '@/assets/img/svg/sidebar/menu.svg'
import usersLogo from '@/assets/img/svg/sidebar/group.svg'
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
    pathName: '/home',
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
  {
    title: 'Notificações',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <IoMdNotificationsOutline size={18} color="#D73035" />
      ) : (
        <IoMdNotificationsOutline size={18} color="#666666" />
      ),
    pathName: '/home/records',
  },
]

export { options }
