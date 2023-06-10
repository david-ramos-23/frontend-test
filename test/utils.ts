import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function render (jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...rtlRender(jsx)
  }
}

// eslint-disable-next-line import/export
export { render }

export function setupMatchMediaMock (): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
}
