import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { Home } from './index'

test('it renders', () => {
  const { container } = render(<Home />)

  expect(container.firstChild).toMatchSnapshot()
})
