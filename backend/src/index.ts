import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { snippets } from './snippets'

const app = new Hono()

app.route('/snippets', snippets)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
