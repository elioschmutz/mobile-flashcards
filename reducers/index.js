import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import decks from './decks'
import cards from './cards'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  decks,
  cards
})

export default persistReducer(persistConfig, rootReducer)

