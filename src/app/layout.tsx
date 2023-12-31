import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/lib/providers'
import { Nav } from '../components/Nav'
export const metadata: Metadata = {
  title: '10up Site Replica',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section>
          <Nav /> 
          <main >
            {children}
          </main>
          <footer>

          </footer>
          </section>
        </body>
      </html>
    </Providers>
    
  )
}
