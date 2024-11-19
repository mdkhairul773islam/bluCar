import Column from '@/components/shared/Column'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import {
  Code,
  Coins,
  Hash,
  Lightbulb,
  Scale,
  ShoppingBag,
  Trash
} from 'lucide-react'

const AddPurchaseTableForm = () => {
  return (
    <form className='flex flex-col gap-8'>
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
            <TableHead className='w-24'>
              <Column icon={<Scale className='size-3' />} label='Unit' />
            </TableHead>
            <TableHead className='w-24'>
              <Column icon={<Code className='size-3' />} label='Quantity' />
            </TableHead>
            <TableHead className='w-28'>
              <Column
                icon={<Coins className='size-3' />}
                label='Purchase Price '
              />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Total' />
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
                defaultValue='AC PUMP KIT CIKON J31'
                name='product_name'
                readOnly
              />
            </TableCell>
            <TableCell>
              <Input defaultValue='Set' name='unit' readOnly />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue='0' name='quantity' />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue='120' name='purchase_price' />
            </TableCell>
            <TableCell>
              <Input
                type='number'
                defaultValue='0'
                name='product_total'
                readOnly
              />
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

      <div className='grid gap-4 md:grid-cols-2'>
        <Textarea
          placeholder='Write remark...'
          className='min-h-48'
          name='remark'
        />

        <div className='flex flex-col gap-3'>
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Total</Label>
            <Input type='number' defaultValue={0.0} name='total' readOnly />
          </div>
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Total Discount</Label>
            <Input type='number' defaultValue={0} name='discount' />
          </div>
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Transport Cost</Label>
            <Input type='number' defaultValue={0} name='transport' />
          </div>
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Grand Total</Label>
            <Input
              type='number'
              defaultValue={0.0}
              name='grand_total'
              readOnly
            />
          </div>
          <div className='grid grid-cols-[140px_1fr_100px] items-center gap-4'>
            <Label className='text-right'>Previous Balance</Label>
            <Input
              type='number'
              defaultValue={0}
              name='previous_balance'
              readOnly
            />
            <Input defaultValue='Receivable' name='previous_sign' readOnly />
          </div>
          <div className='grid grid-cols-[140px_1fr_100px] items-center gap-4'>
            <Label className='text-right'>Paid</Label>
            <Input defaultValue={0.0} name='paid' readOnly />
            <Select defaultValue='Cash'>
              <SelectTrigger>
                <SelectValue placeholder='Select Method' />
              </SelectTrigger>
              <SelectContent>
                {[
                  {
                    label: 'Cash',
                    value: 'Cash'
                  },
                  {
                    label: 'Cheque',
                    value: 'Cheque'
                  },
                  {
                    label: 'Bkash',
                    value: 'Bkash'
                  }
                ].map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-[140px_1fr_100px] items-center gap-4'>
            <Label className='text-right'>Current Balance</Label>
            <Input
              type='number'
              defaultValue={0}
              name='current_balance'
              readOnly
            />
            <Input defaultValue='Receivable' name='current_sign' readOnly />
          </div>
        </div>
      </div>

      <div className='text-right'>
        <Button type='submit' className='bg-brand text-base'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default AddPurchaseTableForm
