import React from 'react'
import App from '@/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Switch } from 'react-router-dom'
import { routes, renderRoute } from '@/router/routerConf'
import { assetPath } from './utils'

module.exports = (ctx, next) => {
  const context = {}

  // layout，后期可分离
  const cssPaths = assetPath('css').reduce((a, b) => {
    return a + `<link rel="stylesheet" href=${b[1]}>`
  }, '')
  const jsPaths = assetPath('js').reduce((a, b) => {
    return a + `<script src="/${b[1]}"></script>`
  }, '')
  const layout = (frontComponents) => `
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000">
        ${cssPaths}
        <title>51job</title>
      </head>
      <body>
        <div id="root">
          ${frontComponents}
        </div>
        ${jsPaths}
      </body>
    </html>
  `

  // 服务端渲染组件
  const frontComponents = renderToString(
    (
      <StaticRouter
        location={ctx.url}
        context={context}>
        <App>
          <Switch>
            { renderRoute(routes) }
          </Switch>
        </App>
      </StaticRouter>
    )
  )

  ctx.body = layout(frontComponents)
}
