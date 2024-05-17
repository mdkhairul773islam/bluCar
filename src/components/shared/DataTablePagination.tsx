import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

export default function DataTablePagination({ table }: { table: any }) {
  const [box, setBox] = useState(1)

  return (
    <div className='my-4 flex items-center justify-between gap-4 '>
      <Button
        className='flex items-center gap-2 bg-brand disabled:cursor-not-allowed '
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft className='size-4' /> Previous
      </Button>
      <div className='flex items-center gap-2'>
        {[1, 2, 3, 4, 5, 6].map(index => (
          <Button
            size='icon'
            key={index}
            onClick={() => setBox(index)}
            className={`${box === index && 'bg-brand'} rounded-full`}
            variant={box !== index ? 'outline' : 'default'}
          >
            {index}
          </Button>
        ))}
      </div>
      <Button
        className='flex items-center gap-2 bg-brand disabled:cursor-not-allowed '
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
        <ArrowRight className='size-4' />
      </Button>
    </div>
  )
}
