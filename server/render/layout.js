import { assetPath } from '../utils'

// layout，后期可分离
const cssPaths = assetPath('css').reduce((a, b) => {
  return a + `<link rel="stylesheet" href=${b[1]}>`
}, '')
const jsPaths = assetPath('js').reduce((a, b) => {
  return a + `<script src="/${b[1]}"></script>`
}, '')
export default (frontComponents, initState) => `
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
      ${cssPaths}
      <title>Luka server rendering</title>
    </head>
    <body>
      <div id="root">
        ${frontComponents}
      </div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initState).replace(/</g, '\\u003c')}
      </script>
      ${jsPaths}
    </body>
  </html>
`
