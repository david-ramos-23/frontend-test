import type { UserRepositoriesState } from '@/types/types'
import { getUserRepositories } from '@services/getUserRepositories'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export const useUserRepositories = ({ userName }: { userName: string }): UserRepositoriesState => {
  const [state, setState] = useState<UserRepositoriesState>({ userRepositories: [], error: null, isError: false, isLoading: true })
  const { data: session } = useSession()
  const accessToken = session?.user?.account?.access_token ?? ''

  useEffect(() => {
    getUserRepositories(userName, accessToken)
      .then(res => {
        setState({
          userRepositories: res,
          error: null,
          isLoading: false,
          isError: false
        })
      })
      .catch(error => {
        console.error(error)
        setState({
          userRepositories: [],
          error: error as Error,
          isLoading: false,
          isError: true
        })
      })
  }, [accessToken, userName])

  return state
}
