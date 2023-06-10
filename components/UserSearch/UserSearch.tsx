'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components'
import type { FormEvent } from 'react'

export function UserSearch () {
  const router = useRouter()

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { userName } = Object.fromEntries(formData.entries())
    if (userName.length > 0 && userName.toString().trim().length > 0) {
      router.push(`/users/${userName.toString()}/repositories`)
    }
  }, [router])

  return (
    <form
      className='w-full'
      onSubmit={handleSubmit}
    >
      <label htmlFor='github-username-input' />
      <div className='w-full flex gap-2'>
        <input
          aria-label='Search username...'
          autoComplete='off'
          className='flex-1 px-3 border-slate-300 border-[1px] rounded-[3px] outline-0 hover:border-[1px] hover:border-black transition duration-200'
          defaultValue=''
          name='userName'
          placeholder='Search username...'
          required
          type='text'
        />

        <Button
          type='submit'
          className=' py-2 px-3 border-[1px] rounded-[3px] border-slate-300 bg-slate-50 font-medium hover:bg-opacity-80 hover:border-[1px] hover:border-black transition duration-200'
        >
          Search
        </Button>
      </div>
    </form>
  )
}
