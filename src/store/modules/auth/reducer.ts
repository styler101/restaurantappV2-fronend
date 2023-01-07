import { AuthActions, AuthState, types } from './types'

const initialState: AuthState = {
  loading: false,
  accessToken: null,
  user: null,
}

export default function (state = initialState, action: AuthActions) {
  switch (action.type) {
    case types.request: {
      const newState = { ...state }
      newState.loading = true
      return newState
    }

    default: {
      return state
    }
  }
}
