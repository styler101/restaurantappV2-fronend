import React from 'react'
import { clock, cozinhando as chief, check } from '@/assets/img/svg/dashboard'

export const labels: {
  [key: string]: {
    name: string
    icon: JSX.Element
  }
} = {
  WAITING: {
    name: 'Fila de Espera',
    icon: <img src={clock} alt="timer icon" />,
  },

  IN_PROGRESS: {
    name: 'Em Produção',
    icon: <img src={chief} alt="chief icon" />,
  },

  DONE: {
    name: 'Feito',
    icon: <img src={check} alt="check icon" />,
  },
}

export const options = {
  WAITING: 'WAITING',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
}
