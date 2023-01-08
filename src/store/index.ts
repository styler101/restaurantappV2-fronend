import React from 'react'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'
import persistReducer from './modules/reduxpersist'
import { Middleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]
const store = createStore(persistReducer(rootReducer), middlewares)
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }
