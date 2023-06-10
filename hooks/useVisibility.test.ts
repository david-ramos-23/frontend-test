import { fireEvent, renderHook } from '@testing-library/react'
import { useVisibility } from './useVisibility'

test('it should call savedCallback on an interval', () => {
  const callback = jest.fn()
  renderHook(() => useVisibility(callback))

  expect(callback).not.toBeCalled()

  fireEvent(document, new Event('visibilitychange', {
    bubbles: true,
    cancelable: true
  }))
  expect(callback).toHaveBeenCalledTimes(1)
})
