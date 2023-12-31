
import './globals.css'
import { Poppins as Poppins, Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const poppins = Poppins({ subsets: ['latin'], weight: '300', variable: '--font-poppins' })


export const metadata = {
  title: 'Lorraine&Erik',
  description: 'React Website',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
