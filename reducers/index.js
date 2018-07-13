import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = (state=[]) => state

export default persistReducer(persistConfig, rootReducer)

