import { AlertCircle } from 'lucide-react'

import { Alert, AlertDescription } from '@/components/ui/alert'

export default function PartyAlert() {
  return (
    <Alert className='mb-3 flex max-w-96 items-center border-l-4 border-l-orange-600'>
      <AlertCircle className='size-4' />
      <AlertDescription className='mt-0.5 text-sm font-medium leading-none md:text-base'>
        <span className='text-green-600'>Green = Receivable </span>
        {' / '}
        <span className='text-red-600'>Red = Payable</span>
      </AlertDescription>
    </Alert>
  )
}
