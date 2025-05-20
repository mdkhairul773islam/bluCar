import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { ListTodo } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import VoucherDetails from './_components/VoucherDetails'

type TPageParams = Promise<{
  purchase_id: string | undefined
}>

export async function generateMetadata(
  {
    params
  }: {
    params: TPageParams
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { purchase_id } = (await params) || {}

  return {
    title: `Purchase Voucher Details of ${purchase_id}`
  }
}

const PurchaseVoucherPage = async ({ params }: { params: TPageParams }) => {
  const { purchase_id } = (await params) || {}

  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='Voucher Details'>
        <Link href='/purchase'>
          <Button className='bg-brand flex items-center gap-2'>
            <ListTodo className='size-4' />
            All Purchase
          </Button>
        </Link>
      </PanelHeader>

      {/* Voucher Details */}
      <VoucherDetails />
    </>
  )
}

export default PurchaseVoucherPage
