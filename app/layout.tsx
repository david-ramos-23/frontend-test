import { Inter } from 'next/font/google'
import { Provider, Navigation, UserSearch } from '@components'
import '@styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Workfully Frontend Test',
  description: 'Github user finder app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning className={`${inter.className} overflow-hidden`}>
        <Provider>
          <Navigation />
          <main className='relative flex justify-center items-center flex-col max-w-7xl mx-auto pb-32'>
            <header>
              <h1 className='mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text3xl text-center'>
                Workfully Frontend Test
                <br />
                <span className='bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent text-center'>
                  Github Users Finder
                </span>
              </h1>
            </header>
            <section className='w-full max-w-md flex flex-col justify-center items-center mt-12 mx-auto  shadow-2xl bg-white p-10 rounded-lg'>
              <UserSearch />
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  )
}
