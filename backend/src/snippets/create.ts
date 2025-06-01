import type { Context } from 'hono';

export function createHandler(c: Context) {
  return c.json({})
}
