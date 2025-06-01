import 'dotenv/config'
import assert from 'assert'

export async function createSummary(text: string) {
  assert.ok(process.env.OPENAI_API_KEY != '', 'Missing environment variable OPENAI_API_KEY')
}
