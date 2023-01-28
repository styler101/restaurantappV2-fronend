import React, { PropsWithChildren, SetStateAction, useContext } from 'react'
import { ItemProps } from '../interfaces'
import mock from '../data/index.json'

type StateAction<T> = React.Dispatch<SetStateAction<T>>

type ComponentProps = PropsWithChildren
interface ContextProps {
  itens: ItemProps[]
  setItens: StateAction<ItemProps[]>
  filterItemsByType: (type: string) => ItemProps[]
}

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
