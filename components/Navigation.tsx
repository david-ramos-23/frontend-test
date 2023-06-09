'use client'

import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { signIn, signOut, useSession, getProviders, type LiteralUnion, type ClientSafeProvider } from 'next-auth/react'
import { type BuiltInProviderType } from 'next-auth/providers'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './Button'
import { GitHub } from './Icons/GitHub'
import { Avatar } from './Avatar'
import { STATUS } from '@/types/types'
import { useInterval } from '@hooks/useInterval'
import { useVisibility } from '@hooks/useVisibility'

export const Navigation = () => {
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider> | null>(null)
  const { data: session, status, update } = useSession()
  useInterval(update, 1000 * 60 * 60)
  useVisibility(update)

  useEffect(() => {
    getProviders()
      .then(res => setProviders(res))
      .catch(error => console.error(error))
  }, [])

  const renderUser = () => {
    const { user } = session as Session
    return (
      <>
        {user?.name != null && user?.image != null
          ? <Avatar alt={user?.name} src={user?.image} />
          : null}
        <Button
          type='button'
          onClick={async () => await signOut()}
          className='rounded-[3px] border border-black bg-transparent py-1.5 px-5 text-black transition-colors duration-500 [&>svg]:transition-colors [&>svg]:duration-500 [&>svg]:fill-black [&>svg]:hover:fill-white hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center cursor-pointer'
        >
          <GitHub width={24} height={24} className='mr-2' />
          Sign out
        </Button>
      </>
    )
  }

  const renderSignIn = () => {
    return (
      <>
        {providers != null &&
          Object.values(providers).map((provider) =>
            <Button
              type='button'
              key={provider.name}
              onClick={async () => {
                await signIn(provider.id)
              }}
              className='rounded-[3px] border border-black bg-black py-1.5 px-5 text-white transition-colors duration-500 [&>svg]:transition-colors [&>svg]:duration-500 [&>svg]:fill-white [&>svg]:hover:fill-black hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center cursor-pointer'
            >
              <GitHub width={24} height={24} className='mr-2' />
              Sign in
            </Button>
          )}
      </>
    )
  }

  return (
    <header className='w-full mb-16 pt-3 sm:px-16 px-6;'>
      <nav className='w-full flex justify-between items-center min-h-[50px]'>
        <Link href='/' className='flex justify-center items-center gap-2'>
          <Image
            src='/workfully.webp'
            alt='logo'
            width={100}
            height={100}
            className='object-contain'
          />
        </Link>
        <div className='flex'>
          {/* session?.user != null */ status === STATUS.AUTHENTICATED ? renderUser() : null}
          {session === null ? renderSignIn() : null}
        </div>
      </nav>
    </header>
  )
}
