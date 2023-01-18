import React from 'react'
import timeLogo from '@/assets/img/svg/dashboard/clock.svg'
import chef from '@/assets/img/svg/dashboard/cozinhando.svg'
import check from '@/assets/img/svg/dashboard/check.svg'

export const labels: {
  [key: string]: {
    name: string
    icon: JSX.Element
  }
} = {
  WAITING: {
    name: 'Fila de Espera',
    icon: <img src={timeLogo} alt="timer icon" />,
  },

  IN_PROGRESS: {
    name: 'Em Produção',
    icon: <img src={chef} alt="chief icon" />,
  },

  DONE: {
    name: 'Feito',
    icon: <img src={check} alt="check icon" />,
  },
}

export const options = {
  WAITING: 1,
  IN_PROGRESS: 2,
  DONE: 3,
}
