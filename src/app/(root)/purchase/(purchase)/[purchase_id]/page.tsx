import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { ListTodo } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import VoucherDetails from './_components/VoucherDetails'

export async function generateMetadata(
  {
    params
  }: {
    params: { purchase_id: string | undefined }
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const purchase_id = params.purchase_id

  return {
    title: `Purchase Voucher Details of ${purchase_id}`
  }
}

const PurchaseVoucherPage = ({
  params
}: {
  params: { purchase_id: string | undefined }
}) => {
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
