'use client'

import { Error } from '@/components'

export default function error ({
  error,
  reset
}: {
  error: Error
  reset?: () => void
}) {
  return (
    <Error error={error} />
  )
}
