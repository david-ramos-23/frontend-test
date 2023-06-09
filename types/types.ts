export interface GithubUser {
  avatar_url: string
  bio: string | null
  id: number
  login: string
  name: string | null
}

export interface User {
  avatarUrl: string
  bio: string | null
  id: number
  name: string | null
  userName: string
}

export interface GithubRepository {
  forks_count: number | undefined
  html_url: string
  id: number
  name: string
  stargazers_count: number | undefined
}

export interface UserRepository {
  forks: number | undefined
  id: number
  name: string
  stars: number | undefined
  url: string
}

export interface UserRepositoriesState {
  userRepositories: UserRepository[]
  error: Error | null
  isLoading: boolean
  isError: boolean
}

export interface UserState {
  user: User
  error: Error | null
  isLoading: boolean
  isError: boolean
}

export const STATUS = Object.freeze({
  AUTHENTICATED: 'authenticated',
  LOADING: 'loading'
})
