import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type DefaultActions = ActionType<typeof actions>
// Esse arquivo contém os types do redux e a tipagem das actions
export interface DefaultState {
  showMessage: string
}
