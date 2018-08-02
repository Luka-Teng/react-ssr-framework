/*
  Route -> props -> Components
  invalid params for component: path, component, exact
  valid params for component: routes, basicRouteInfo, ...rest
*/
import { Route } from 'react-router-dom'
import React from 'react'

export default function BaseRoute (props) {
  const { path, component: Component, exact, ...rest } = props
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return (<Component {...rest} {...props} />)
      }}
    />
  )
}
