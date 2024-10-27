'use client'

import { Coins, Hash } from 'lucide-react'
import Column from '@/components/shared/Column'
import { ColumnDef } from '@tanstack/react-table'

export type Income = {
  id: string
  exp: string
  jan: number
  feb: number
  mar: number
  apr: number
  may: number
  jun: number
  jul: number
  aug: number
  sep: number
  oct: number
  nov: number
  dec: number
  total: number
}

export const columns: ColumnDef<Income>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Column
        icon={<Hash className='size-3' />}
        label='ID'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    )
  },
  {
    accessorKey: 'exp',
    header: () => <Column icon={<Coins className='size-3' />} label='Exp' />
  },
  {
    accessorKey: 'jan',
    header: () => <Column icon={<Coins className='size-3' />} label='Jan' />
  },
  {
    accessorKey: 'feb',
    header: () => <Column icon={<Coins className='size-3' />} label='Feb' />
  },
  {
    accessorKey: 'mar',
    header: () => <Column icon={<Coins className='size-3' />} label='Mar' />
  },
  {
    accessorKey: 'apr',
    header: () => <Column icon={<Coins className='size-3' />} label='Apr' />
  },
  {
    accessorKey: 'may',
    header: () => <Column icon={<Coins className='size-3' />} label='May' />
  },
  {
    accessorKey: 'jul',
    header: () => <Column icon={<Coins className='size-3' />} label='Jul' />
  },
  {
    accessorKey: 'aug',
    header: () => <Column icon={<Coins className='size-3' />} label='Aug' />
  },
  {
    accessorKey: 'sep',
    header: () => <Column icon={<Coins className='size-3' />} label='Sep' />
  },
  {
    accessorKey: 'oct',
    header: () => <Column icon={<Coins className='size-3' />} label='Oct' />
  },
  {
    accessorKey: 'nov',
    header: () => <Column icon={<Coins className='size-3' />} label='Nov' />
  },
  {
    accessorKey: 'dec',
    header: () => <Column icon={<Coins className='size-3' />} label='Dec' />
  },
  {
    accessorKey: 'total',
    header: () => <Column icon={<Coins className='size-3' />} label='Total' />,
    cell: ({ row }) => {
      const { total } = row.original

      return <div className='flex justify-end '>{total}</div>
    }
  }
]
