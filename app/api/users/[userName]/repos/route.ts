import type { GithubRepository, UserRepository } from '@/types'
import { NextResponse } from 'next/server'

const GITHUB_URL = process.env.GITHUB_API_URL ?? ''

async function getUserRepositories ({ userName, authorization }: { userName: string, authorization: string }): Promise<GithubRepository[]> {
  const res = await fetch(`${GITHUB_URL}/users/${userName}/repos`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization
    }
  })

  if (!res.ok) {
    throw new Error(`Error HTTP: ${res.status}`, { cause: res.status })
  }

  const response = await res.json()

  return response
}

const mapRepoFromGitHubToUserRepository = (repository: GithubRepository): UserRepository => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { forks_count, html_url, id, name, stargazers_count } = repository

  return {
    id,
    name,
    stars: stargazers_count,
    forks: forks_count,
    url: html_url
  }
}

export async function GET (request: Request, { params }: { params: { userName: string } }) {
  const { userName } = params

  if (userName == null) return new Response('Missing username', { status: 400 })

  try {
    const authorization = request.headers.get('authorization') ?? ''
    const response = await getUserRepositories({ userName, authorization })
    const user = response.map((res: GithubRepository) => mapRepoFromGitHubToUserRepository(res))

    return NextResponse.json(user)
  } catch (err: any) {
    return new Response('Internal Server Error', { status: err.cause })
  }
}
