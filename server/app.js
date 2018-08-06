const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const staticServer = require('koa-static')
const staticCache = require('koa-static-cache')
const router = require('koa-router')()
const render = require('./render')

const app = new Koa()

// error handler
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    }
    ctx.app.emit('error', err, ctx)
  }
}

app.on('error', function (err) {
  console.log('logging error ', err.message)
  console.log(err)
})

app.use(handler)
app.use(bodyParser())
app.use(logger())
app.use(staticServer(path.resolve(__dirname, '../build')))
app.use(staticCache(path.resolve(__dirname, '../build'), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}))
router.get('*', render)
app.use(router.routes())

app.listen(3008, () => {
  console.log('listen on:' + 3008)
})
