import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen w-full'>
      <Sidebar />

      <div className='flex flex-col overflow-hidden lg:ml-[280px]'>
        <Header />

        <main className='flex flex-1 flex-col  p-4 lg:p-6'>{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
