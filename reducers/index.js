import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import decks from './decks'
import { RESET_STATE } from '../actions/shared'

const persistConfig = {
  key: 'root',
  storage
}

const appReducer = combineReducers({
  decks,
})

const rootReducer = (state, action) => {
  return appReducer(action.type === RESET_STATE ? undefined : state, action)
}

export default persistReducer(persistConfig, rootReducer)

