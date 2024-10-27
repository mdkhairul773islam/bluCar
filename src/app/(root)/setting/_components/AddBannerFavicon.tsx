'use client'

import React, { ChangeEvent, useState } from 'react'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { Trash, TrashIcon } from 'lucide-react'

const AddBannerFavicon = () => {
  const [banner, setBanner] = useState<string | null>(null)
  const [favicon, setFavicon] = useState<string | null>(null)

  function handleBanner(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files)
      setBanner(URL.createObjectURL(e.target.files[0]))
    }
  }

  function handleFavicon(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files)
      setFavicon(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <Card>
      <CardContent>
        <form>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col gap-3'>
              {banner && (
                <div className='relative '>
                  <Image
                    height={200}
                    width={800}
                    className='h-52 w-full object-cover'
                    alt='Banner'
                    src={banner}
                  />
                  <div
                    onClick={() => setBanner(null)}
                    className='absolute right-0 top-0 flex !size-5 -translate-y-1/4 translate-x-1/4 cursor-pointer items-center  justify-center rounded-full border bg-muted hover:text-red-600'
                  >
                    <Trash className='size-2' />
                  </div>
                </div>
              )}
              <Label>Upload Banner</Label>
              <Input
                type='file'
                accept='image/*'
                onChange={handleBanner}
                placeholder='Banner'
              />
            </div>
            <div className='flex flex-col gap-3'>
              {favicon && (
                <div className='relative w-fit'>
                  <Image
                    height={40}
                    width={40}
                    className='size-10 object-cover'
                    alt='Favicon'
                    src={favicon}
                  />

                  <div
                    onClick={() => setFavicon(null)}
                    className='absolute right-0 top-0 flex !size-5 -translate-y-1/4 translate-x-1/4 cursor-pointer items-center  justify-center rounded-full border bg-muted hover:text-red-600'
                  >
                    <Trash className='size-2' />
                  </div>
                </div>
              )}
              <Label>Upload Favicon (40*40)</Label>
              <Input
                type='file'
                onChange={handleFavicon}
                placeholder='Favicon'
              />
            </div>

            <div>
              <Button type='submit' className='bg-brand'>
                Save
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddBannerFavicon
