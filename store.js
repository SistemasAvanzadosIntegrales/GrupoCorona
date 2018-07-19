import { 
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index'
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'
import { Map as map } from 'immutable'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation', 'auth'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

/**
 * @description: para que nuestro store pueda escuchar las acciones de react navigation.
 **/
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, navigationMiddleware)
)

const persistor = persistStore(store);

export { store, persistor }
