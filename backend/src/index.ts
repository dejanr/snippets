import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { Snippet } from "@snippets/shared"

const app = new Hono()

app.get('/', (c) => {
  const snippet: Snippet = { code: 'console.log("Hello World")', summary: "Hello world snippet" };

  return c.json(snippet);
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
