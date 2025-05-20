import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import ProfileView from './_components/ProfileView'

type TPageParams = Promise<{
  id: string | undefined
}>

type TShowProfilePageProps = {
  params: TPageParams
}

export async function generateMetadata(
  { params }: TShowProfilePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = (await params) || {}

  return {
    title: `Profile of ${id}`
  }
}

const ShowProfilePage = async ({ params }: TShowProfilePageProps) => {
  const { id } = (await params) || {}

  return (
    <>
      {/* Panel Header */}
      <PanelHeader title={`Profile of ${id}`}>
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
