import { Schema, model } from 'mongoose'
import type { Snippet } from "@snippets/shared"

const schema = new Schema<Snippet>({
  id: String,
  text: String,
  summary: String,
});

export const SnippetModel = model('Snippet', schema);
