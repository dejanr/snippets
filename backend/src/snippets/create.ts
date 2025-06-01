import { randomUUID } from 'crypto';
import type { Context } from 'hono'
import mongoose from 'mongoose'
import { SnippetModel } from './db/model'

export async function createHandler(c: Context) {
  const { text } = await c.req.json()
  const snippet = new SnippetModel({
    id: randomUUID(),
    text,
    summary: ''
  })

  await mongoose.connect(process.env.MONGODB_URI as string)
  const newSnippet = await snippet.save()

  c.status(201)

  return c.json(newSnippet)
}
