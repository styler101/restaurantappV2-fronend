import React from 'react'
import history from '@/assets/img/svg/dashboard/historic.svg'
import { Header } from '@/components/Header'
import { Records } from '@/components/Records'

export function Ui() {
  const header = [
    { label: 'Mesa', content: 'mesa' },
    { label: 'Data', content: 'mesa' },
    { label: 'Nome', content: 'content' },
    { label: 'Categoria', content: 'category' },
    { label: 'Total', content: 'total' },
    { label: 'Ações', content: 'actions' },
  ]
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
      <Records header={header} />
    </React.Fragment>
  )
}
