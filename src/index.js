import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux'

ReactDOM.hydrate(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
