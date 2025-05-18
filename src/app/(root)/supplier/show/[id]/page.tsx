import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Metadata } from 'next'
import SupplierDetail from './_components/SupplierDetail'

export const metadata: Metadata = {
  title: 'Show Supplier'
}

const SupplierShowPage = async ({
  params
}: {
  params: { id: string | undefined }
}) => {
  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='Supplier Details' />

      <SupplierDetail supplierId={params?.id} />
    </>
  )
}

export default SupplierShowPage
