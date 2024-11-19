import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import { Profile, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { Button } from '@/components/ui/button'
import { UserPlus } from 'lucide-react'
import { BasicTable } from '@/components/shared/BasicTable'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Profile'
}

async function getData(): Promise<Profile[]> {
  return [
    {
      id: '1',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '2',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '3',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '4',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '5',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '6',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '7',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '8',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '9',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '10',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    },
    {
      id: '11',
      image: '/images/profile.png',
      name: 'Piston Swaraj	',
      showroom: 'M/S Blue Motors',
      username: 'bluemotors123',
      privilege: 'Super Admin'
    }
  ]
}

const AllProfilePage = async () => {
  const data = await getData()

  return (
    <>
      {/* Panel Header */}
      <PanelHeader title='All Profile'>
        <Link href='/profile/create'>
          <Button className='flex items-center gap-2 bg-brand'>
            <UserPlus className='size-4' />
            Create Profile
          </Button>
        </Link>
      </PanelHeader>

      {/* All Profile Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default AllProfilePage
