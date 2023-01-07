import { DefaultState, DefaultActions } from '@/store/modules/default/types'

export interface StoreState {
  default: DefaultState
}

export type StoreAction = DefaultActions
