'use client'

export function Error ({
  error,
  reset
}: {
  error: Error
  reset?: () => void
}) {
  return (
    <p className='p-4 bg-[#F5DFDE] text-[#892311] rounded-md border-[hsl(8,74%,83%)] border-[1px]'>
      {error.cause === 404 ? 'User doesn\'t exist' : 'Failed to get user info'}
    </p>
  )
}
