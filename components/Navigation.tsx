'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders, type LiteralUnion, type ClientSafeProvider } from 'next-auth/react'
import { type BuiltInProviderType } from 'next-auth/providers'
import { Button } from './Button'
import { GitHub } from './Icons/GitHub'
import { Avatar } from './Avatar'
import { Session } from 'next-auth'

export const Navigation = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider> | null>(null)

  useEffect(() => {
    getProviders()
      .then(res => setProviders(res))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    if (session === null ||
      session?.user?.profile?.repos_url === undefined ||
      session?.user?.account?.access_token === undefined) return

    fetch(session.user?.profile?.repos_url, {
      headers: { Authorization: `Bearer ${session.user?.account?.access_token}` }
    }).then(async res => await res.json()).catch(err => console.error(err))
  }, [session])

  const renderUser = () => {
    const { user } = session as Session

    return (
      <>
        {user?.name != null && user?.image != null && <Avatar alt={user?.name} src={user?.image} />}
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
    <header className='w-full mb-16 pt-3 '>
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
          {(session?.user != null) && renderUser()}
          {(session === null) && renderSignIn()}
        </div>
      </nav>
    </header>
  )
}
