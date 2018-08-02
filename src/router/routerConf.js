import BaseRoute from './BaseRoute'
import Home from '@/pages/home'
import Test from '@/pages/test'
import React from 'react'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/test',
    component: Test,
    exact: true
  }
]

export const renderRoute = (routes) => {
  return routes.map((route, i) => {
    return (<BaseRoute key={i} {...route} />)
  })
}
