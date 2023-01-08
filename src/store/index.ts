import { Middleware } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import creaStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

const sagaMiddlewares = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddlewares]
const store = creaStore(rootReducer, middlewares)
const persistore = persistStore(store)
sagaMiddlewares.run(rootSaga)

export { store, persistore }
