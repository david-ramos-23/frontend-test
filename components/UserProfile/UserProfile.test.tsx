/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { screen } from '@testing-library/react'
import { UserProfile } from './UserProfile'
import { render } from '@/test/utils'
import { User, UserState } from '@/types'

const mockError404 = {
  cause: 404,
  message: "User doesn't exist"
} as Error

const mockError500 = {
  cause: 500,
  message: 'Failed to get user info'
} as Error

const mockUser = {
  id: 1,
  name: 'John Doe',
  userName: 'johndoe',
  bio: 'Lorem ipsum dolor sit amet',
  avatarUrl: 'https://example.com/avatar.jpg'
}
const useUserMock = jest.fn(({ userName }) => ({} as UserState))

jest.mock('./hooks', () => ({
  useUser: ({ userName }: { userName: string }) => useUserMock({ userName })
}))

it('should display user profile when user data is successfully fetched', async () => {
  useUserMock.mockReturnValueOnce({
    user: mockUser,
    error: null,
    isError: false,
    isLoading: false
  })
  render(<UserProfile userName='johndoe' />)
  expect(useUserMock).toHaveBeenCalledWith({ userName: 'johndoe' })
  expect(screen.getByText('John Doe')).toBeInTheDocument()
  expect(screen.getByText('@johndoe')).toBeInTheDocument()
  expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument()
})

it('should display error component when there is an error fetching user data', async () => {
  useUserMock.mockReturnValueOnce({
    user: {} as User,
    error: mockError404,
    isError: true,
    isLoading: false
  })

  render(<UserProfile userName='nonexistentuser' />)
  expect(useUserMock).toHaveBeenCalledWith({ userName: 'nonexistentuser' })
  expect(screen.getByText("User doesn't exist")).toBeInTheDocument()
})

it('should displays error component with the correct error message.', async () => {
  useUserMock.mockReturnValueOnce({
    user: {} as User,
    error: mockError500,
    isError: true,
    isLoading: false
  })
  render(<UserProfile userName='johndoe' />)
  expect(useUserMock).toHaveBeenCalledWith({ userName: 'johndoe' })
  expect(screen.getByText('Failed to get user info')).toBeInTheDocument()
})
