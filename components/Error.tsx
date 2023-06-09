'use client'

export function Error ({
  error,
  reset
}: {
  error: Error
  reset?: () => void
}) {
  return (
    <p>
      {error.cause === 404 ? 'User doesn\'t exists' : 'Failed to get user info'}
    </p>
  )
}
