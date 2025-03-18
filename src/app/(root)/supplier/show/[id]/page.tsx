import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SupplierDetail from './_components/SupplierDetail'

export const metadata: Metadata = {
  title: 'Show Supplier'
}

const SupplierShowPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='Supplier Details' />

      <SupplierDetail supplierId={params.id} />
    </>
  )
}

export default SupplierShowPage
