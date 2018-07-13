import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import decks from './decks'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  decks
})

export default persistReducer(persistConfig, rootReducer)

