'use client'

import { Error as ErrorComponent, UserCard } from '@components'
import { useUser } from './hooks'

interface UserProps {
  userName: string
}
export async function UserProfile ({ userName }: UserProps) {
  const { user, error, isError, isLoading } = useUser({ userName })

  return (
    <>
      {!isLoading && isError && error != null ? <ErrorComponent error={error} /> : null}
      {!isLoading && !isError && user != null ? <UserCard user={user} /> : null}
    </>
  )
}
