import React from 'react'
import App from '@/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Switch } from 'react-router-dom'
import { routes, renderRoute } from '@/router/routerConf'
import layout from './layout'
import { matchRoutes } from 'react-router-config'
// redux
import store from '@/redux'
import { Provider } from 'react-redux'

module.exports = async (ctx, next) => {
  // 路由的上下文状态，一般用来传递跳转和状态码
  const context = {}

  // 获取单前路由下的组件
  const branch = matchRoutes(routes, ctx.url)
  const promises = branch.map(({route}) => {
    const fetch = route.component.fetch
    return fetch instanceof Function ? fetch(store) : Promise.resolve(null)
  })
  await Promise.all(promises).catch((err) => {
    console.log(err)
  })

  // 服务端渲染组件
  const frontComponents = renderToString(
    (
      <Provider store={store}>
        <StaticRouter
          location={ctx.url}
          context={context}>
          <App>
            <Switch>
              { renderRoute(routes) }
            </Switch>
          </App>
        </StaticRouter>
      </Provider>
    )
  )

  // 如果页面发生重定向，这跳转该页面
  if (context.url) {
    ctx.redirect(context.url)
  }
  const initState = store.getState()

  ctx.body = layout(frontComponents, initState)
}
