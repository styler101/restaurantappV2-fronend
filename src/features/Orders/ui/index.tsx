import React from 'react'
import history from '@/assets/img/svg/dashboard/historic.svg'
import { Header } from '@/components/Header'

export function Ui() {
  return (
    <React.Fragment>
      <Header
        data={{
          title: 'Histórico',
          description: 'Visualize pedidos anteriores',
          icon: <img src={history} alt="Order image" />,
          showTimer: true,
        }}
      />
    </React.Fragment>
  )
}
