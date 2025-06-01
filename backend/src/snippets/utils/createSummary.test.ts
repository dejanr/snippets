import { expect, test } from 'vitest'
import { createSummary } from './createSummary'

test('it should call openai and return summary of text', async () => {
  const summary = await createSummary('console.log("Hello World!")')

  expect(summary).toStrictEqual('A JavaScript statement that logs “Hello World!” to the console.')
})
