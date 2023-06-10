import { getUserRepositories } from './getUserRepositories'

const fetchMock: jest.Mock = jest.fn(async () =>
  await Promise.resolve({
    json: async () => await Promise.resolve({}),
    ok: true
  })
)

global.fetch = fetchMock

beforeEach(() => {
  fetchMock.mockClear()
})

test('it should call fetch with the correct url', async () => {
  await getUserRepositories('user', 'accessToken')
  expect(fetch).toHaveBeenCalledWith('/api/users/user/repos', { cache: 'no-cache', headers: { Authorization: 'Bearer accessToken', 'Content-Type': 'application/json' } })
})

test('it should throw an error if the response is not ok', async () => {
  fetchMock.mockResolvedValueOnce({ ok: false, status: 500 })

  await expect(getUserRepositories('user', 'accessToken')).rejects.toThrow()
})
