import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import AddHeaderSetting from './AddHeaderSetting'
import AddSocialAccount from './AddSocialAccount'
import AddBannerFavicon from './AddBannerFavicon'

const Setting = () => {
  return (
    <Tabs defaultValue='header' className='grid gap-5 lg:gap-0 lg:grid-cols-[200px_1fr]'>
      <TabsList className='flex h-auto flex-row gap-4 lg:gap-0 lg:flex-col items-start justify-start bg-transparent'>
        <TabsTrigger
          value='header'
          className='bg-transparent px-0 py-2 font-medium text-[#71717a] data-[state=active]:bg-transparent data-[state=active]:text-brand data-[state=active]:shadow-none'
        >
          Header Setting
        </TabsTrigger>
        <TabsTrigger
          value='social'
          className='bg-transparent px-0 py-2 font-medium text-[#71717a] data-[state=active]:bg-transparent data-[state=active]:text-brand data-[state=active]:shadow-none'
        >
          Social Icon
        </TabsTrigger>
        <TabsTrigger
          value='banner-favicon'
          className='bg-transparent px-0 py-2 font-medium text-[#71717a] data-[state=active]:bg-transparent data-[state=active]:text-brand data-[state=active]:shadow-none'
        >
          Banner/Favicon
        </TabsTrigger>
      </TabsList>
      <div>
        <TabsContent value='header' className='max-w-4xl'>
          <AddHeaderSetting />
        </TabsContent>

        <TabsContent value='social' className='max-w-4xl'>
          <AddSocialAccount />
        </TabsContent>

        <TabsContent value='banner-favicon' className='max-w-4xl'>
          <AddBannerFavicon />
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default Setting
