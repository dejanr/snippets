import type { Context } from 'hono'
import type { Snippet } from "@snippets/shared"
import { randomUUID } from 'crypto';
import mongoose from 'mongoose'
import { SnippetModel } from './db/model'
import { createSummary } from './utils/createSummary';

export async function createHandler(c: Context) {
  const { text } = await c.req.json()
  const snippet = new SnippetModel({
    id: randomUUID(),
    text,
    summary: await createSummary(text)
  })

  await mongoose.connect(process.env.MONGODB_URI as string)
  const newSnippet = await snippet.save()

  c.status(201)

  return c.json<Snippet>(newSnippet)
}
