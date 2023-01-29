import React from 'react'
import { SideBarProps } from '../interfaces'
import {
  home,
  redHome,
  historic,
  customOrder,
  redmenu,
  menu,
  redusers,
  group,
} from '@/assets/img/svg/sidebar'
import { IoMdNotificationsOutline } from 'react-icons/io'

const options: SideBarProps[] = [
  {
    title: 'Home',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redHome} alt="home logo" />
      ) : (
        <img src={home} alt="home logo" />
      ),
    pathName: '/home',
  },

  {
    title: 'Historico',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={customOrder} alt="historic logo" />
      ) : (
        <img src={historic} alt="historic logo" />
      ),
    pathName: '/home/orders',
  },

  {
    title: 'Cardapio',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redmenu} alt="menu logo" />
      ) : (
        <img src={menu} alt="menu historic" />
      ),
    pathName: '/home/records',
  },

  {
    title: 'Usuários',
    icon: (isChecked: boolean) =>
      isChecked ? (
        <img src={redusers} alt="users logo" />
      ) : (
        <img src={group} alt="users logo" />
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
