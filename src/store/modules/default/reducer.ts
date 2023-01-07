import { DefaultState, DefaultActions } from './types'
const initialState: DefaultState = {
  showMessage: 'Default Message',
}

function reducer(state = initialState, action: DefaultActions) {
  switch (action.type) {
    case 'SHOW_MESSAGE': {
      const newState = { ...initialState }
      newState.showMessage = ' Not Default Message'
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer
