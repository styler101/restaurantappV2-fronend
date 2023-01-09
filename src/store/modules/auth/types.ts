import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type AuthActions = ActionType<typeof actions>

interface AuthenticatedUserData {
  _id: string | null
  name: string | null
  email: string | null
}

export interface AuthState {
  loading: boolean
  accessToken: string | null
  user: AuthenticatedUserData
}

export const types = {
  request: 'SIGN_IN_REQUEST',
  success: 'SIGN_IN_REQUEST_SUCCESS',
  failure: 'SIGN_IN_REQUEST_FAILURE',
}
