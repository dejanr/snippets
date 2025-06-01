import type { Context } from 'hono'
import mongoose from 'mongoose'
import { SnippetModel } from './db/model'

export async function getHandler(c: Context) {
  const id = c.req.param('id')
  const snippetQuery = SnippetModel.where({ id });

  await mongoose.connect(process.env.MONGODB_URI as string)

  const snippet = await snippetQuery.findOne();

  return c.json(snippet)
}
