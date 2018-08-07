import BaseRoute from './BaseRoute'
import Home from '@/pages/home'
import Template from '@/pages/template'
import React from 'react'

// 服务端渲染情况下，路由配置中的重定向都要使用redirect
// 否则服务器不会重定向
/*
* 路由配置：
* path：路径
* component：渲染组件
* title：标题
* exact：精确匹配，默认否
* auth：是否需要前置用户登录，默认否
* logic：返回组件前的运行逻辑
*/
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
  },
  {
    path: '/redirect',
    component: Home,
    exact: true,
    auth: true
  }
]

export const renderRoute = (routes) => {
  return routes.map((route, i) => {
    return (<BaseRoute key={i} {...route} />)
  })
}
