import { UserRepository } from '@/types'

export const getUserRepositories = async (userName: string, accessToken: string): Promise<UserRepository[]> => {
  return await fetch(`/api/users/${userName}/repos`, {
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
