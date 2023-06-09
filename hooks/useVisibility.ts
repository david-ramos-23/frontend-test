import { useEffect, useRef } from 'react'

export function useVisibility (handler: () => void): void {
  const savedHandler = useRef(handler)

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const visibilityHandler = () => document.visibilityState === 'visible' && handler()
    window.addEventListener('visibilitychange', visibilityHandler, false)
    return () => window.removeEventListener('visibilitychange', visibilityHandler, false)
  }, [handler])
}
