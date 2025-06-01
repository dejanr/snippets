import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { SnippetForm } from './index'

test('it renders', () => {
  const { container } = render(<SnippetForm />)

  expect(container.firstChild).toMatchSnapshot()
})
