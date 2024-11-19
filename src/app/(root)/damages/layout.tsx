import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const DamageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'All Damages', href: '/damages' },
          { label: 'Delete Damages', href: '/damages/delete' }
        ]}
      />

      {children}
    </div>
  )
}

export default DamageLayout
