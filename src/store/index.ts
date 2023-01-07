import creaStore from './createStore'
import rootReducer from './modules/rootReducer'

const store = creaStore(rootReducer, [])

export { store }
