import { applyMiddleware, createStore, Reducer, Middleware } from 'redux'

import { StoreAction, StoreState } from './storeTypes'

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
