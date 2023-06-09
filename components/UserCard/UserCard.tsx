import { Avatar } from '@components/Avatar'
import type { User } from '@/types/types'

export interface UserCardProps {
  user: User
}

export function UserCard ({ user }: UserCardProps) {
  const hasName = user.name !== null && user.name.length > 0
  const hasBio = user.bio !== null && user.bio.length > 0

  return (
    <article className='flex gap-4'>
      <article className='min-w-fit'>
        <Avatar size={96} src={user.avatarUrl} alt={user.name ?? 'avatar'} className='rounded-md' />
      </article>

      <aside className='flex flex-col justify-center'>
        {hasName
          ? (
            <span className='text-sm text-gray-500 italic'>
              {`@${user.userName}`}
            </span>
            )
          : null}
        <span className='text-2xl font-bold'>
          {hasName ? user.name : user.userName}
        </span>

        {hasBio
          ? (
            <span className='mt-2 text-xs'>
              {user.bio}
            </span>
            )
          : null}
      </aside>
    </article>
  )
}
