import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'

const app = new Koa()
const router = new Router()

app
  .use(serve(__dirname + '/www'))
  .listen(3000)
