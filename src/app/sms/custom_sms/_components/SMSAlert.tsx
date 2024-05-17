import { AlertCircle } from 'lucide-react'

import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SMSAlert() {
  return (
    <Alert className='border-l-4 border-l-orange-600'>
      <AlertCircle className='size-4' />
      <AlertDescription>
        Total SMS: <strong className='font-bold'>36200</strong> Total Send SMS:
        <strong className='font-bold'> 27450 </strong> Remaining SMS:
        <strong className='font-bold'> 8750 </strong>
      </AlertDescription>
    </Alert>
  )
}
