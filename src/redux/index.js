import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import asyncRedux from './middleware/asyncRedux'
import sideEffect from './sideEffect'

export default createStore(
  reducer,
  applyMiddleware(asyncRedux)
)

asyncRedux.run(sideEffect)
