import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import ProfileView from './_components/ProfileView'

type TShowProfilePageProps = {
  params?: {
    id?: string
  }
}

export async function generateMetadata(
  { params }: TShowProfilePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params?.id

  return {
    title: `Profile of ${id}`
  }
}

const ShowProfilePage = ({ params }: TShowProfilePageProps) => {
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
