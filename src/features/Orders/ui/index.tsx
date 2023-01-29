import React from 'react'
import { Header, Records, RecordsContainer } from '@/components'
import { historic } from '@/assets/img/svg/dashboard'

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
          icon: <img src={historic} alt="Order image" />,
          showTimer: true,
        }}
      />
      <RecordsContainer>
        <Records header={header} />
      </RecordsContainer>
    </React.Fragment>
  )
}
