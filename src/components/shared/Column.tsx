export default function Column({
  icon,
  label,
  onclick
}: {
  icon: React.ReactNode
  label: string
  onclick?: () => void
}) {
  return (
    <div className='flex cursor-pointer items-center gap-1' onClick={onclick}>
      <span className='text-[#5A6272]'>{icon}</span>
      <span className='whitespace-nowrap text-xs font-medium text-[#637189]'>
        {label}
      </span>
    </div>
  )
}
