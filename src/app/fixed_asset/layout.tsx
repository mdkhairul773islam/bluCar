import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const FixedAssetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Field of Fixed Asset', href: '/fixed_asset/field' },
          { label: 'All Fixed Asset', href: '/fixed_asset' },
          { label: 'Delete  Fixed Asset', href: '/fixed_asset/delete' }
        ]}
      />

      {children}
    </div>
  )
}

export default FixedAssetLayout
