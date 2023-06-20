import './globals.css'
import { Inter } from 'next/font/google'

import { cookies } from 'next/headers'
import Nav from './components/Nav'
import Login from './components/Login'
import Home from './page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {

  const isAuth = cookies().has("token")
  
   

      return (
        <html lang="pt-br">
          
          <body className={inter.className}>
            <Nav/>
            {isAuth ? children : <Login/>}
            </body>
        </html>
      )
}
