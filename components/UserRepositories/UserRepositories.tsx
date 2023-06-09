'use client'

import { RepoForkedIcon, StarFillIcon } from '@primer/octicons-react'
import { useUserRepositories } from './hooks'

interface UserRepositoriesProps {
  userName: string
}

export function UserRepositories ({ userName }: UserRepositoriesProps) {
  const { userRepositories, isLoading, isError } = useUserRepositories({ userName })

  const hasUserRepositories = userRepositories.length > 0

  return (
    <div className='w-full sm:max-h[150px] max-h-[300px] overflow-y-auto'>

      {!isError && !isLoading
        ? (
          <header className='sticky top-0 bg-[#ffffffaa] backdrop-blur-sm z-[1] h-[33px] border-b-2 border-black font-medium'>
            Repositories
          </header>
          )
        : null}
      {hasUserRepositories && !isLoading
        ? (
          <ul className='py-1'>
            {userRepositories.map((repo) => (
              <a href={repo.url} key={repo.id} className='flex w-full justify-between py-2 px-3 border-b-2'>
                <p className='font-semibold'>
                  {repo.name}
                </p>
                <div className='flex flex-row'>
                  <span>
                    <StarFillIcon /> {repo.stars ?? 0}
                  </span>
                  <span className='ml-1'>
                    <RepoForkedIcon /> {repo.forks ?? 0}
                  </span>
                </div>
              </a>
            ))}
          </ul>

          )
        : null}
      {!hasUserRepositories && !isLoading && !isError ? <p className='p-3'>User doesn&apos;t have repositories</p> : null}
    </div>
  )
}
