import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import Invoice from './_components/Invoice'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Blank Invoice'
}

const BlankInvoicePage = async () => {
  return (
    <>
      <ActiveMenu menu='blankInvoice' />

      {/* Panel Header */}
      <PanelHeader title='Blank Invoice'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Blank Invoice */}
      <Invoice />
    </>
  )
}

export default BlankInvoicePage
