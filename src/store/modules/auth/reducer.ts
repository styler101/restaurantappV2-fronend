import { AuthActions, AuthState, types } from './types'

const initialState: AuthState = {
  loading: false,
  accessToken: null,
  user: {
    _id: null,
    email: null,
    name: null,
  },
}

export default function (state = initialState, action: AuthActions) {
  switch (action.type) {
    case types.request: {
      const newState = { ...state }
      newState.loading = true
      return newState
    }

    case types.success: {
      //@ts-expect-error
      const { _id, accessToken, name, email } = action.payload
      const newState = { ...state }
      newState.loading = false
      newState.accessToken = accessToken
      ;(newState.user._id = _id), (newState.user.name = name)
      newState.user.email = email
      return newState
    }

    case types.failure: {
      const newState = { ...state }
      newState.loading = false
      return newState
    }

    default: {
      return state
    }
  }
}
