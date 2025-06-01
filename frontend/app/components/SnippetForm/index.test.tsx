import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { SnippetForm } from './index'

vi.mock('react-router', () => ({
  Form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
}))

test('it renders', () => {
  const mockSubmit = () => { };
  const { container } = render(<SnippetForm onSubmit={mockSubmit} />)

  expect(container.firstChild).toMatchSnapshot()
})
