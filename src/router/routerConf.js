import BaseRoute from './BaseRoute'
import Home from '@/pages/home'
import Template from '@/pages/template'
import React from 'react'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/template',
    component: Template,
    exact: true
  }
]

export const renderRoute = (routes) => {
  return routes.map((route, i) => {
    return (<BaseRoute key={i} {...route} />)
  })
}
