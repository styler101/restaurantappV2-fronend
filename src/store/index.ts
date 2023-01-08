import { Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import creaStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

const sagaMiddlewares = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddlewares]
const store = creaStore(rootReducer, middlewares)
sagaMiddlewares.run(rootSaga)

export { store }
