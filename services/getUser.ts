import { User } from '@/types'

export const getUser = async (userName: string, accessToken: string | undefined): Promise<User> => {
  return await fetch(`/api/users/${userName}`, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken !== undefined ? `Bearer ${accessToken}` : ''
    }
  })
    .then(async res => {
      if (!res.ok) {
        throw Error(`Error HTTP: ${res.status}`, { cause: res.status })
      }

      return await res.json()
    })
}
