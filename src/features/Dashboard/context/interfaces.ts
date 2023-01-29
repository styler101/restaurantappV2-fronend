import React, { SetStateAction, PropsWithChildren } from 'react'
import { ItemProps } from '../interfaces'

type StateAction<T> = React.Dispatch<SetStateAction<T>>

export type ComponentProps = PropsWithChildren

export interface ContextProps {
  itens: ItemProps[]
  setItens: StateAction<ItemProps[]>
  filterItemsByType: (type: string) => ItemProps[]
}
