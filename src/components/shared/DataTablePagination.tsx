import React from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const DataTablePagination = ({ table }: { table: any }) => {
  return (
    <>
      <div className='mt-8 flex items-center justify-between font-medium'>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='flex items-center gap-2 text-sm text-primary disabled:cursor-not-allowed'
        >
          <ArrowLeft className='size-4  text-primary' />
          Previous
        </button>

        {/* <div className='flex items-center gap-[2px]'>
          <button className='h-6 min-w-6 rounded bg-primary text-xs  text-primary-foreground'>
            1
          </button>
          <button className='h-6 min-w-6 rounded text-xs  text-[#828A96]'>
            2
          </button>
          <button className='h-6 min-w-6 rounded text-xs  text-[#828A96]'>
            3
          </button>
          <button className='h-6 min-w-6 rounded text-xs  text-[#828A96]'>
            4
          </button>
          <button className='h-6 min-w-6 rounded text-xs  text-[#828A96]'>
            5
          </button>
        </div> */}

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='flex items-center gap-2 text-sm text-primary disabled:cursor-not-allowed'
        >
          Next
          <ArrowRight className='size-4  text-primary' />
        </button>
      </div>
    </>
  )
}

export default DataTablePagination
