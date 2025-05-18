import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import ProfileView from './_components/ProfileView'

export async function generateMetadata(
  {
    params
  }: {
    params: { id: string | undefined }
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params?.id

  return {
    title: `Profile of ${id}`
  }
}

const ShowProfilePage = ({
  params
}: {
  params: { id: string | undefined }
}) => {
  return (
    <>
      {/* Panel Header */}
      <PanelHeader title={`Profile of ${params?.id}`}>
        <Link href='/profile/create'>
          <Button className='bg-brand flex items-center gap-2'>
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
