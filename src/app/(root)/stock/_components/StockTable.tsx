import {
  Table,
  TableBody,
  TableCaption,
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

export type Stock = {
  id: string
  product_name: string
  product_code: string
  category: string
  manufacturer?: string
  quantity: number
  purchase_price: number
  sell_price: number
  amount: number
  showroom: string
  username: string
}

export default function StockTable({ data }: { data: Stock[] }) {
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
          <TableHead>
            <div className='flex items-center gap-1'>
              <Component className='size-3' />
              Quantity
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <HandCoins className='size-3' />
              Purchase Price
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <HandCoins className='size-3' />
              Sell Price
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <Coins className='size-3' />
              Amount
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-1'>
              <Store className='size-3' />
              Showroom
            </div>
          </TableHead>
          <TableHead className='text-right'>
            <div className='flex items-center gap-1'>
              <User className='size-3' />
              Username
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(stock => (
          <TableRow key={stock.id}>
            <TableCell>{stock.id}</TableCell>
            <TableCell className='font-medium'>
              {stock.product_code} {stock.product_name}
            </TableCell>
            <TableCell>{stock.category}</TableCell>
            <TableCell>
              {stock.manufacturer ? stock.manufacturer : 'N/A'}
            </TableCell>
            <TableCell>{stock.quantity} Pcs</TableCell>
            <TableCell>{stock.purchase_price}</TableCell>
            <TableCell>{stock.sell_price}</TableCell>
            <TableCell>{stock.amount}</TableCell>
            <TableCell>{stock.showroom}</TableCell>
            <TableCell className='text-right'>{stock.username}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className='text-right'>
            Total =
          </TableCell>
          <TableCell>105 Pcs</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>10050 Tk</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
