import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import type { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
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
