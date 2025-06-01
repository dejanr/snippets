import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { HomePage } from './index'

vi.mock('react-router', () => ({
  useSubmit: () => vi.fn(),
  Form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
}))

test('it renders', () => {
  const { container } = render(<HomePage />)

  expect(container.firstChild).toMatchSnapshot()
})
