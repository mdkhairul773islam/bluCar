import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '⏳ Loading..'
}

const loading = () => {
  return (
    <div className='flex h-[calc(100vh_-_100px)] w-full items-center justify-center gap-2 text-2xl font-medium'>
      <span className='animate-spin-slow'>⏳</span>
      Loading...
    </div>
  )
}

export default loading
