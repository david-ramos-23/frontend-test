import { UserProfile, UserRepositories } from '@/components'

export default function Repositories ({ params }: { params: { userName: string } }) {
  const { userName } = params
  return (
    <>
      <section className='w-full mt-4'>
        <UserProfile userName={userName} />
      </section>

      <section className='w-full mt-4'>
        <UserRepositories userName={userName} />
      </section>
    </>
  )
}
