import React from 'react'

const ReportSummery = () => {
  return (
    <div className='grid grid-cols-2 overflow-hidden rounded'>
      <div className='bg-green-600 p-3 text-center font-medium text-white'>
        Total Income : 30950 Tk
      </div>
      <div className='bg-red-600 p-3 text-center font-medium text-white'>
        Total Expenditure : 59302 Tk
      </div>
      <div className='col-span-2 bg-brand-100 p-3 text-center  font-medium'>
        Balance : -28352 Tk
      </div>
    </div>
  )
}

export default ReportSummery
