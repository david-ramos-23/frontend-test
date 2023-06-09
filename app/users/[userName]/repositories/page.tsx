export default function Repositories ({ params }: { params: { userName: string } }) {
  const { userName } = params
  return (
    <>
      {userName}
      <section className='w-full mt-8 mb-4'>
        User Profile
      </section>

      <section className='w-full'>
        User Repositories
      </section>
    </>
  )
}
