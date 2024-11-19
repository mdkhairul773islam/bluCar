import React from 'react'

const Invoice = () => {
  return (
    <div className='flex h-96 w-full flex-col justify-between'>
      <div className='grid grid-cols-3 gap-x-10 gap-y-2'>
        <div>
          <span className='font-medium'>Name :</span> <span></span>
        </div>
        <div>
          <span className='font-medium'>Mobile :</span> <span></span>
        </div>
        <div>
          <span className='font-medium'>Date :</span> <span>2024-05-06</span>
        </div>
        <div>
          <span className='font-medium'>Voucher No :</span>{' '}
          <span>29684521</span>
        </div>
        <div>
          <span className='font-medium'>Address :</span> <span></span>
        </div>
        <div>
          <span className='font-medium'>Remarks :</span> <span></span>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='border-t border-dashed border-primary'>
          Signature of Customer
        </div>
        <div className='rounded-full border border-primary p-2 py-0.5'>
          বিঃ দ্রঃ বিক্রিত মাল ফেরতযোগ্য (শর্ত প্রযোজ্য)।
        </div>
        <div className='border-t border-dashed border-primary'>
          Signature of Authority
        </div>
      </div>
    </div>
  )
}

export default Invoice
