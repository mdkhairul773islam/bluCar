import { Skeleton } from '../ui/skeleton'

const LoadingTable = () => {
  return (
    <div className='grid gap-1'>
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton key={index} className='h-10'></Skeleton>
      ))}
    </div>
  )
}

export default LoadingTable
