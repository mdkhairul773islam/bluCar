import React from 'react'

const PanelHeader = ({
  title,
  children
}: {
  title: string
  children?: React.ReactNode
}) => {
  return (
    <div className='mb-5 flex items-center justify-between md:mb-8 '>
      <span className='text-lg font-semibold text-primary md:text-2xl'>
        {title}
      </span>

      {children}
    </div>
  )
}

export default PanelHeader
