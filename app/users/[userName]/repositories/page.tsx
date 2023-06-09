import { UserProfile } from '@components/UserProfile'

export default function Repositories ({ params }: { params: { userName: string } }) {
  const { userName } = params
  return (
    <>
      <section className='w-full mt-8 mb-4'>
        <UserProfile userName={userName} />
      </section>

      <section className='w-full'>
        User Repositories
      </section>
    </>
  )
}
