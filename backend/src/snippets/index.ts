import { Hono } from 'hono'
import { createHandler } from './create'

const snippets = new Hono()

snippets.post('/', createHandler)

export default snippets
