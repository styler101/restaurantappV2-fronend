import { AuthActions, AuthState } from '@/store/modules/auth/types'

export interface StoreState {
  auth: AuthState
}

export type StoreAction = AuthActions
