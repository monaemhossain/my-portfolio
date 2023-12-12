import { Inter } from 'next/font/google'
import './globals.css'

import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Monaem Hossain ',
  description: 'Personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div>header</div>
          {children}
        </Theme>
      </body>
    </html>
  )
}
