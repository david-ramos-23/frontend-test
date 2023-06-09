import type { GithubUser, User } from '@/types/types'
import { NextResponse } from 'next/server'

const GITHUB_URL = process.env.GITHUB_API_URL ?? ''

async function getUser ({ userName, authorization }: { userName: string, authorization: string }): Promise<GithubUser> {
  const res = await fetch(`${GITHUB_URL}/users/${userName}`, {
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

const mapUserFromGitHubToUser = (user: GithubUser): User => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { avatar_url, bio, id, name, login } = user

  return {
    avatarUrl: avatar_url,
    bio,
    id,
    name,
    userName: login
  }
}

export async function GET (request: Request, { params }: { params: { userName: string } }) {
  const { userName } = params

  if (userName == null) return new Response('Missing username', { status: 400 })

  try {
    const authorization = request.headers.get('authorization') ?? ''
    const response = await getUser({ userName, authorization })
    const user = mapUserFromGitHubToUser(response)

    return NextResponse.json(user)
  } catch (err: any) {
    return new Response('Internal Server Error', { status: err.cause })
  }
}
