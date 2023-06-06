import { Inter } from 'next/font/google'
import Provider from '@components/Provider'
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
      <body suppressHydrationWarning className={inter.className}>
        <Provider>
          <main className='relative flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6;'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
