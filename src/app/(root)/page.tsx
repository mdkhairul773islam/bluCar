import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { BsArrowUp } from 'react-icons/bs'
import { BiCategory } from 'react-icons/bi'
import { PiSealWarning } from 'react-icons/pi'
import { RiContactsBook2Line } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import { GiPayMoney } from 'react-icons/gi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GrMoney } from 'react-icons/gr'

const cardData = [
  {
    label: 'Total Portfolio',
    icon: <AiOutlineFundProjectionScreen />,
    count: 10
  },
  {
    label: 'Total Category',
    icon: <BiCategory />,
    count: 32
  },
  {
    label: 'Total Admin',
    icon: <BiCategory />,
    count: 23
  },
  {
    label: 'Total Contacts',
    icon: <RiContactsBook2Line />,
    count: 23
  },
  {
    label: 'Total Income',
    icon: <GiReceiveMoney />,
    count: 64544
  },
  {
    label: 'Total Expense',
    icon: <GiPayMoney />,
    count: 345353
  },
  {
    label: 'Total Balance',
    icon: <GrMoney />,
    count: 232434234
  },
  {
    label: 'Total Service',
    icon: <GrMoney />,
    count: 23
  }
]

export default function Dashboard() {
  return (
    <>
      <ActiveMenu menu='dashboard' />

      <PanelHeader title='Welcome to Blue Motors Dashboard' />

      <div className='grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4'>
        {cardData?.map((item, index) => (
          <div
            key={index.toString()}
            className='dashboardCard flex flex-col gap-3 rounded-lg p-5 shadow-md'
          >
            <div className='flex items-start justify-between'>
              <div className=' __icon flex h-10 w-10 items-center justify-center rounded-xl bg-white text-2xl shadow-md'>
                {item.icon}
              </div>
              <span className='flex items-center gap-2 text-sm text-white/80'>
                <BsArrowUp /> 1.5%
              </span>
            </div>
            <div className='flex items-end justify-between'>
              <div>
                <h1 className='text-2xl font-bold text-white'>{item.count}</h1>
                <h2 className='text-base leading-none tracking-[3px] text-white/80'>
                  {item.label}
                </h2>
              </div>
              <PiSealWarning className='text-white/80' />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
