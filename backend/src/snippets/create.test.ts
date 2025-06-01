import { expect, test } from 'vitest'
import snippets from './index'

test('Creating a new snippet should return status 201', async () => {
  const res = await snippets.request('/', {
    method: 'POST',
    body: JSON.stringify({ text: 'console.log("Hello World")' }),
  })

  expect(res.status).toBe(201)
})
