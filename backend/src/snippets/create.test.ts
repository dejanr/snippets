import { vi, beforeEach, expect, test } from 'vitest'
import snippets from './index'
import { createSummary } from './utils/createSummary'

vi.mock('./utils/createSummary', () => ({
  createSummary: vi.fn()
}))

beforeEach(() => {
  vi.clearAllMocks()
})

test('Creating a new snippet should return status 201', async () => {
  const res = await snippets.request('/', {
    method: 'POST',
    body: JSON.stringify({ text: 'console.log("Hello World")' }),
  })

  expect(res.status).toBe(201)
})

test('Creating a new snippet should populate summary from openai', async () => {
  vi.mocked(createSummary).mockResolvedValue('Prints Hello World')

  const res = await snippets.request('/', {
    method: 'POST',
    body: JSON.stringify({ text: 'console.log("Hello World")' }),
  })
  const response = await res.json()

  expect(response.summary).toBe('Prints Hello World')
})
