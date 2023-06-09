import { User } from '@/types/types'

export const getUser = async (userName: string, accessToken: string): Promise<User> => {
  return await fetch(`/api/users/${userName}`, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(async res => {
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`, { cause: res.status })
      }

      return await res.json()
    })
}
