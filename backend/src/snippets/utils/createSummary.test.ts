import { vi, expect, test, beforeEach, afterEach } from 'vitest'
import { createSummary } from './createSummary'
import createFetchMock from 'vitest-fetch-mock';

const fetchMocker = createFetchMock(vi);

beforeEach(() => {
  fetchMocker.enableMocks();
});

test('it should call openai and return summary of text', async () => {
  fetchMocker.mockResponseOnce(JSON.stringify({
    choices: [
      {
        message: {
          content: 'A JavaScript statement that logs “Hello World!” to the console.'
        }
      }
    ]
  }));

  const summary = await createSummary('console.log("Hello World!")')

  expect(summary).toStrictEqual('A JavaScript statement that logs “Hello World!” to the console.')
})

afterEach(() => {
  fetchMocker.disableMocks();
});
