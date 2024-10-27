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
import { Textarea } from '@/components/ui/textarea'
import { Battery, Hash, Lightbulb, ShoppingBag, Trash } from 'lucide-react'
import { BiUnite } from 'react-icons/bi'
import { GiPumpkin } from 'react-icons/gi'
import { PiEngine } from 'react-icons/pi'

const AddChalanTableForm = () => {
  return (
    <form className='flex flex-col gap-3'>
      <Table>
        <TableHeader className='bg-gray-100 dark:bg-muted'>
          <TableRow>
            <TableHead className='w-10'>
              <div className='flex items-center gap-2'>
                <Hash className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  SL
                </span>
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-2'>
                <ShoppingBag className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Name
                </span>
              </div>
            </TableHead>
            <TableHead className='w-24'>
              <div className='flex items-center gap-2'>
                <PiEngine className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Engine No
                </span>
              </div>
            </TableHead>
            <TableHead className='w-24'>
              <div className='flex items-center gap-2'>
                <PiEngine className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Chassis No
                </span>
              </div>
            </TableHead>
            <TableHead className='w-24'>
              <div className='flex items-center gap-2'>
                <GiPumpkin className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Pump No
                </span>
              </div>
            </TableHead>
            <TableHead className='w-24'>
              <div className='flex items-center gap-2'>
                <Battery className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Battery No
                </span>
              </div>
            </TableHead>
            <TableHead className='w-20'>
              <div className='flex items-center gap-2'>
                <BiUnite className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Unit
                </span>
              </div>
            </TableHead>
            <TableHead className='w-12'>
              <div className='flex items-center gap-2'>
                <BiUnite className='size-3 text-[#5A6272]' />
                <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
                  Quantity
                </span>
              </div>
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
            <TableCell>Ac Pamp Kit Haf J31</TableCell>
            <TableCell>
              <Input name='engine_no' />
            </TableCell>
            <TableCell>
              <Input name='chassis_no' />
            </TableCell>
            <TableCell>
              <Input name='pump_no' />
            </TableCell>
            <TableCell>
              <Input name='battery_no' />
            </TableCell>
            <TableCell>
              <Input defaultValue='Set' name='unit' readOnly />
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

      <Textarea placeholder='Write remark...' name='remark' />
      <div className='text-right'>
        <Button type='submit' className='bg-brand text-base'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default AddChalanTableForm
