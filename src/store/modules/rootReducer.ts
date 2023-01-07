import { combineReducers } from 'redux'
import DefaultReducer from './default/reducer'

export default combineReducers({
  default: DefaultReducer,
})
