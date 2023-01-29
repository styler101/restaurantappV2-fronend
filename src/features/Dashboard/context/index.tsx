import React, { useContext } from 'react'
import { ComponentProps, ContextProps } from './interfaces'
import { ItemProps } from '../interfaces'
import mock from '../data/index.json'

export const Context = React.createContext({} as ContextProps)

export function DashboardContext(props: ComponentProps) {
  const { children } = props
  const [itens, setItens] = React.useState<ItemProps[]>(mock.data)

  function filterItemsByType(type = 'WAITING'): ItemProps[] {
    const filteredItens = itens.filter((item) => item.type === type)
    return filteredItens
  }

  return (
    <Context.Provider value={{ itens, setItens, filterItemsByType }}>
      {children}
    </Context.Provider>
  )
}

export function useDashboard() {
  const context = useContext(Context)
  if (!context) {
    throw new Error('You must provided dashboard context')
  }
  return context
}
