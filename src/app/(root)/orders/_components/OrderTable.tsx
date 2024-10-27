import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Building2,
  Coins,
  Component,
  Gift,
  HandCoins,
  LayoutPanelLeft,
  List,
  Store,
  User
} from 'lucide-react'

export type Order = {
  id: string
  product_name: string
  product_code: string
  category: string
  manufacturer?: string
  quantity: number
  showroom: string
}

export default function OrderTable({ data }: { data: Order[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[40px]'>
            <div className='flex items-center gap-1'>
              <List className='size-3' />
              SL
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <Gift className='size-3' />
              Product Code
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <Gift className='size-3' />
              Name
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <LayoutPanelLeft className='size-3' />
              Category
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <Building2 className='size-3' />
              Manufacturer
            </div>
          </TableHead>
          <TableHead className='w-[120px]'>
            <div className='flex items-center gap-1'>
              <Component className='size-3' />
              Quantity
            </div>
          </TableHead>
          <TableHead className='w-[150px]'>
            <div className='flex items-center gap-1'>
              <Store className='size-3' />
              Showroom
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(stock => (
          <TableRow key={stock.id}>
            <TableCell className='text-center'>{stock.id}</TableCell>
            <TableCell>{stock.product_code} </TableCell>
            <TableCell className='font-medium'>{stock.product_name}</TableCell>
            <TableCell>{stock.category}</TableCell>
            <TableCell>
              {stock.manufacturer ? stock.manufacturer : 'N/A'}
            </TableCell>
            <TableCell>{stock.quantity}</TableCell>
            <TableCell className='text-right'>{stock.showroom}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
