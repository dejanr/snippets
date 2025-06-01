import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { SnippetPage } from './index'

test('it renders', () => {
  const { container } = render(<SnippetPage snippet={{ id: '1', text: 'text', summary: 'summary' }} />)

  expect(container.firstChild).toMatchSnapshot()
})
