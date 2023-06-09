/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { getUser } from '@services/getUser'
import { User, UserState } from '@/types/types'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

const initialState = {
  user: {} as User,
  error: null,
  isError: false,
  isLoading: true
}
export const useUser = ({ userName }: { userName: string }): UserState => {
  const [state, setState] = useState<UserState>(initialState)
  const { data: session } = useSession()
  const accessToken = session?.user?.account?.access_token ?? ''

  useEffect(() => {
    getUser(userName, accessToken)
      .then(res => {
        setState({
          user: res,
          error: null,
          isError: false,
          isLoading: false
        })
      })
      .catch(error => {
        setState({
          user: {} as User,
          error: error as Error,
          isError: true,
          isLoading: false
        })
      })
  }, [accessToken, userName])

  return state
}
