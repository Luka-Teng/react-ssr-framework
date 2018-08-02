import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '@/App'
import { routes, renderRoute } from './routerConf'

class AppRouter extends Component {
  render () {
    return (
      <Router>
        <App>
          <Switch>
            { renderRoute(routes) }
          </Switch>
        </App>
      </Router>
    )
  }
}

export default AppRouter
