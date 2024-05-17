import React from 'react'
import Link from 'next/link'
import { ListTodo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata, ResolvingMetadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import VoucherDetails from './_components/VoucherDetails'

export async function generateMetadata(
  {
    params
  }: {
    params: { purchase_id: string }
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
  params: { purchase_id: string }
}) => {
  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='Voucher Details'>
        <Link href='/purchase'>
          <Button className='flex items-center gap-2 bg-brand'>
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
