import React from 'react'
import Image from 'next/image'
import { MailCheck, Phone } from 'lucide-react'

const ProfileView = () => {
  return (
    <div className=''>
      <div className='h-52 bg-brand bg-[url("/images/profile-bg.svg")] bg-cover'></div>
      <div className='mx-auto -mb-24 max-w-4xl -translate-y-24 rounded-lg border bg-background bg-white p-10 pt-0 shadow-xl'>
        <div className='grid -translate-y-14 grid-cols-[200px_1fr_200px] items-center '>
          <div className='flex items-center gap-2 text-brand'>
            <MailCheck className='size-4' />
            <span className='font-medium '>example@gmail.com</span>
          </div>
          <div>
            <div className='relative mx-auto size-40 overflow-hidden rounded-full shadow-xl'>
              <Image src='/images/profile.png' fill alt='Profile ' />
            </div>
          </div>
          <div className='flex items-center justify-end gap-2 text-brand'>
            <Phone className='size-4' />
            <span className='font-medium '>01741651218</span>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center  text-center'>
          <span className='mb-3 text-4xl font-medium text-[#666666] dark:text-black/70'>
            John Smith
          </span>
          <span className='text-base font-medium'>
            Username : bluemotors123
          </span>
          <span className='text-base font-medium'>Privilege : super</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileView
