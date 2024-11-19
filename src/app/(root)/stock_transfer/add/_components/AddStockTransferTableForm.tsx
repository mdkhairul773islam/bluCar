import Column from '@/components/shared/Column'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Battery,
  Code,
  Grid2X2,
  Hash,
  Lightbulb,
  ShoppingBag,
  Trash
} from 'lucide-react'

const AddStockTransferTableForm = () => {
  return (
    <form className='flex flex-col gap-3'>
      <Table>
        <TableHeader className='bg-gray-100 dark:bg-muted'>
          <TableRow>
            <TableHead className='w-10'>
              <Column icon={<Hash className='size-3' />} label='SL' />
            </TableHead>
            <TableHead>
              <Column
                icon={<ShoppingBag className='size-3' />}
                label='Product Name'
              />
            </TableHead>
            <TableHead>
              <Column
                icon={<Grid2X2 className='size-3' />}
                label='Product Category'
              />
            </TableHead>
            <TableHead className='w-24'>
              <Column
                icon={<Code className='size-3' />}
                label='Stock Quantity'
              />
            </TableHead>
            <TableHead className='w-24'>
              <Column icon={<Code className='size-3' />} label='Quantity' />
            </TableHead>

            <TableHead className='w-10'>
              <div className='flex items-center gap-2'>
                <Lightbulb className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Action
                </span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <Input
                defaultValue='Fog Light Balp Nissai Japan H3 12v Dami	'
                name='product_name'
                readOnly
              />
            </TableCell>
            <TableCell>
              <Input defaultValue='Balp' name='product_category' readOnly />
            </TableCell>
            <TableCell>
              <Input defaultValue='Set' name='stock_quantity' readOnly />
            </TableCell>
            <TableCell>
              <Input name='quantity' />
            </TableCell>
            <TableCell>
              <div className='flex items-center justify-end'>
                <Button size='icon' className='delete-button'>
                  <Trash className='size-4' />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className='text-right'>
        <Button type='submit' className='bg-brand text-base'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default AddStockTransferTableForm
