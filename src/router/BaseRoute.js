/*
  Route -> props -> Components
  invalid params for component: path, component, exact
  valid params for component: routes, basicRouteInfo, ...rest
*/
import { Route, Redirect } from 'react-router-dom'
import React from 'react'

export default function BaseRoute (props) {
  const { path, component: Component, exact, logic, auth, ...rest } = props
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        if (logic) logic(props)
        if (auth) return (<Redirect to={'/template'} />)
        return (<Component {...rest} {...props} />)
      }}
    />
  )
}
