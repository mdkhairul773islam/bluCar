import React from 'react'
import { Metadata } from 'next'
import AddExpenditure from '../_components/AddExpenditure'
import { Expenditure, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Delete Expenditure'
}

async function getData(): Promise<Expenditure[]> {
  return [
    {
      id: '1',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name:
        '	1. LIFT WELL HYDROLIC PIPE BORO NORMAL V3 ( TAR HALKA)(1), 2. LIFT WELL HYDROLIC PIPE SOTO V3-200,V2-250,V-300(1),',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '2',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name: '1. P43 12v Normal Balp(2), 2. Kostep Tesa J9(1),	',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '3',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name: '1. P43 12v Normal Balp(2), 2. Kostep Tesa J9(1),	',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '4',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name:
        '1. STADING GILA/REEL 3 PEC SONALIKA/SWARAJ PRINCE(1), 2. 15 BALL STADING BEARING (ZFM-23) SONALIKA (AT-1001058)(1), 3. 205L GEAR OIL EP-140(1), 4. Silicone Likuyet Soto KALO/SADA (ESRON SADA)(1), 5. Jut(1), 6. 205L GEAR OIL EP-90 NORMAL(10), 7. 26 INCH KOLOM SAVE (ZF) GILA OUT LOCK TYPE SONALIKA SFP (10015005)(1),	',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '5',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name:
        '	1. LIFT WELL HYDROLIC PIPE BORO NORMAL V3 ( TAR HALKA)(1), 2. LIFT WELL HYDROLIC PIPE SOTO V3-200,V2-250,V-300(1),',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '6',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name: '1. P43 12v Normal Balp(2), 2. Kostep Tesa J9(1),	',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '7',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name:
        '	1. LIFT WELL HYDROLIC PIPE BORO NORMAL V3 ( TAR HALKA)(1), 2. LIFT WELL HYDROLIC PIPE SOTO V3-200,V2-250,V-300(1),',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '8',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name: '	1. P43 12v Normal Balp(2), 2. Kostep Tesa J9(1),	',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '9',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name:
        '	1. LIFT WELL HYDROLIC PIPE BORO NORMAL V3 ( TAR HALKA)(1), 2. LIFT WELL HYDROLIC PIPE SOTO V3-200,V2-250,V-300(1),',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    },
    {
      id: '10',
      date: '2024-05-02',
      showroom: 'M/S Blue Motors',
      expenditure_type: 'Product',
      product_name: '1. P43 12v Normal Balp(2), 2. Kostep Tesa J9(1),	',
      order_no: '20240324185',
      remarks: 'N/A',
      amount: 500.0
    }
  ]
}

const ExpenditurePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='service' />

      {/* Panel Header */}
      <PanelHeader title='Delete Expenditure'>
        <AddExpenditure />
      </PanelHeader>

      {/* Delete Expenditure Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ExpenditurePage
