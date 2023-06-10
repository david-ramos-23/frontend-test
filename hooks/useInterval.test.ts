import { renderHook } from '@testing-library/react'
import { useInterval } from './useInterval'

jest.useFakeTimers()

test('it should call savedCallback on an interval', () => {
  const callback = jest.fn()
  renderHook(() => useInterval(callback, 1000))

  expect(callback).not.toBeCalled()

  jest.advanceTimersByTime(1000)

  expect(callback).toHaveBeenCalledTimes(1)
})
