import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import { ReactNode } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Boys Games',
  description: 'Loja de jogos feita como um estudo de tecnologias',
}

export default function RootLayout({ children,}: {children: ReactNode}) {
      return (
        <html lang="pt-br">
          <body className={inter.className}>
    
            <Nav/>
              {children}
            </body>
        </html>
      )
}
