import './globals.css'

import React from 'react'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/Providers/ThemeProvider'

// NeutrifPro Font
const NeutrifPro = localFont({
  src: [
    {
      path: '../../public/fonts/NeutrifPro-Bold.woff2',
      weight: '700'
    },
    {
      path: '../../public/fonts/NeutrifPro-SemiBold.woff2',
      weight: '600'
    },
    {
      path: '../../public/fonts/NeutrifPro-Medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/NeutrifPro-Regular.woff2',
      weight: '400'
    }
  ]
})

export const metadata: Metadata = {
  title: {
    default: 'Blue Motors',
    template: `%s - Blue Motors`
  },
  description: 'Blue Motors is an HRM & CRM management software',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background  antialiased',
          NeutrifPro.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='grid min-h-screen w-full'>
            <Sidebar />

            <div className='flex flex-col overflow-hidden lg:ml-[280px]'>
              <Header />

              <main className='flex flex-1 flex-col  p-4 lg:p-6'>
                {children}
              </main>
            </div>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
