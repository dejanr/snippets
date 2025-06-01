import { Hono } from 'hono'
import { createHandler } from './create'
import { getHandler } from './get'

export const snippets = new Hono()

snippets.post('/', createHandler)
snippets.get('/:id', getHandler)
