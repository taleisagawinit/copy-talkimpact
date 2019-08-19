import { createStore, combineReducers } from 'redux'

import loginReducer from './reducers/login.reducer'
import chatReducer from './reducers/chat.reducer' 

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  chatReducer: chatReducer
})

const store = createStore(rootReducer)

export default store