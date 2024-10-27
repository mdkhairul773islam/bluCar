import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import ProfileView from './_components/ProfileView'
import PanelHeader from '@/components/shared/PanelHeader'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'

export async function generateMetadata(
  {
    params
  }: {
    params: { id: string }
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id

  return {
    title: `Profile of ${id}`
  }
}

const ShowProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      {/* Panel Header */}
      <PanelHeader title={`Profile of ${params.id}`}>
        <Link href='/profile/create'>
          <Button className='flex items-center gap-2 bg-brand'>
            <Users className='size-4' />
            All Profile
          </Button>
        </Link>
      </PanelHeader>

      {/* Profile View */}
      <ProfileView />
    </>
  )
}

export default ShowProfilePage
