import {
  Award,
  BaggageClaim,
  BookUser,
  Dot,
  HandCoins,
  LandPlot,
  LayoutDashboard,
  LayoutPanelLeft,
  PackageOpen,
  Settings,
  Store,
  Truck,
  ListX,
  Landmark,
  FileSpreadsheet,
  Users,
  Sheet,
  TicketPercent,
  Coins,
  MessageCircle,
  Send,
  Users2,
  ShoppingCart,
  BarChart4,
  ArrowLeftRight,
  User,
  UserPlus,
  Settings2,
  BarChart3
} from 'lucide-react'
import { type NavItem } from '@/types'

export const NavItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    activeMenu: 'dashboard',
    href: '/',
    color: 'text-rose-500'
  },
  {
    title: 'Reference',
    icon: BookUser,
    activeMenu: 'reference',
    href: '/reference',
    color: 'text-orange-500'
  },
  {
    title: 'Category',
    icon: LayoutPanelLeft,
    activeMenu: 'category',
    href: '/category',
    color: 'text-green-500'
  },
  {
    title: 'Brand',
    icon: Award,
    activeMenu: 'brand',
    href: '/brand',
    color: 'text-pink-500'
  },
  {
    title: 'Showroom',
    icon: Store,
    activeMenu: 'showroom',
    href: '/showroom',
    color: 'text-purple-500'
  },
  {
    title: 'Product',
    icon: PackageOpen,
    activeMenu: 'product',
    href: '/product',
    color: 'text-yellow-500'
  },
  {
    title: 'Orders',
    icon: BaggageClaim,
    activeMenu: 'orders',
    href: '/orders',
    color: 'text-teal-500'
  },
  {
    title: 'Supplier',
    icon: Truck,
    activeMenu: 'supplier',
    href: '/supplier',
    color: 'text-indigo-500',
    isChildren: true,
    children: [
      {
        title: 'All Supplier',
        icon: Dot,
        color: 'text-red-500',
        href: '/supplier'
      },
      {
        title: 'All Transaction',
        icon: Dot,
        color: 'text-red-500',
        href: '/supplier/transaction'
      },
      {
        title: 'Delete Transaction',
        icon: Dot,
        color: 'text-red-500',
        href: '/supplier/transaction/delete'
      }
    ]
  },
  {
    title: 'Zone',
    icon: LandPlot,
    activeMenu: 'zone',
    href: '/zone',
    color: 'text-cyan-500'
  },
  {
    title: 'Party',
    icon: User,
    activeMenu: 'party',
    href: '/party',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'Add Party',
        href: '/party/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Party',
        href: '/party',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Payable Party List',
        href: '/party/payable',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Receivable Party List',
        href: '/party/receivable',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Transaction',
        href: '/party/transaction',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Delete Transaction',
        href: '/party/transaction/delete',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Collection Report',
        href: '/party/transaction/collection_report',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Purchase',
    icon: ShoppingCart,
    activeMenu: 'purchase',
    href: '/purchase',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'Add Purchase',
        href: '/purchase/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Purchase',
        href: '/purchase',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Item Wise Purchase',
        href: '/purchase/itemwise',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Delete Purchase',
        href: '/purchase/delete',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Add Purchase Return',
        href: '/purchase/return/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Purchase Return',
        href: '/purchase/return',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Add Purchase Pre Order',
        href: '/purchase/pre_order/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Purchase Pre Order',
        href: '/purchase/pre_order',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Stock',
    icon: BarChart4,
    activeMenu: 'stock',
    href: '/stock',
    color: 'text-purple-500'
  },
  {
    title: 'Datewise Stock',
    icon: BarChart4,
    activeMenu: 'datewiseStock',
    href: '/datewise_stock',
    color: 'text-purple-500'
  },
  {
    title: 'Stock Transfer',
    icon: ArrowLeftRight,
    activeMenu: 'stockTransfer',
    href: '/stock_transfer',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'Stock Transfer',
        href: '/stock_transfer/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Stock Transfer History',
        href: '/stock_transfer',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Stock Transfer Received History',
        href: '/stock_transfer/received',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Stock Transfer Delete History',
        href: '/stock_transfer/delete',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Damage Product',
    icon: ListX,
    activeMenu: 'damages',
    href: '/damanges',
    color: 'text-emerald-500',
    isChildren: true,
    children: [
      {
        title: 'All Damages',
        icon: Dot,
        color: 'text-red-500',
        href: '/damages'
      },
      {
        title: 'Delete Damages',
        icon: Dot,
        color: 'text-red-500',
        href: '/damages/delete'
      }
    ]
  },
  {
    title: 'Chalan',
    icon: TicketPercent,
    activeMenu: 'chalan',
    href: '/chalan',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'Add Chalan',
        href: '/chalan/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Chalan',
        href: '/chalan',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Chalan Delete History',
        href: '/chalan/delete',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Sale',
    icon: ShoppingCart,
    activeMenu: 'sale',
    href: '/sale',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'Add Sale',
        href: '/sale/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Sale',
        href: '/sale',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Add Hire Sale',
        href: '/sale/hire_sale/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Hire Sale',
        href: '/sale/hire_sale',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Delete Sale',
        href: '/sale/delete',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Add Pre Order Sale',
        href: '/sale/pre_order/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Pre Order Sale',
        href: '/sale/pre_order',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Delete Pre Order Sale',
        href: '/sale/pre_order/delete',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Search Item Wise',
        href: '/sale/itemwise',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Add Sale Return',
        href: '/sale/return/add',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'All Sale Return',
        href: '/sale/return',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Income',
    icon: HandCoins,
    activeMenu: 'income',
    href: '/income',
    color: 'text-red-500',
    isChildren: true,
    children: [
      {
        title: 'Field of Income',
        icon: Dot,
        color: 'text-red-500',
        href: '/income/field'
      },
      {
        title: 'All Income',
        icon: Dot,
        color: 'text-red-500',
        href: '/income'
      },
      {
        title: 'Delete Income',
        icon: Dot,
        color: 'text-red-500',
        href: '/income/delete'
      }
    ]
  },
  {
    title: 'Cost',
    icon: HandCoins,
    activeMenu: 'cost',
    href: '/cost',
    color: 'text-emerald-500',
    isChildren: true,
    children: [
      {
        title: 'Field of Cost',
        icon: Dot,
        color: 'text-red-500',
        href: '/cost/field'
      },
      {
        title: 'All Cost',
        icon: Dot,
        color: 'text-red-500',
        href: '/cost'
      },
      {
        title: 'Delete Cost',
        icon: Dot,
        color: 'text-red-500',
        href: '/cost/delete'
      }
    ]
  },
  {
    title: 'Blank Invoice',
    icon: Sheet,
    activeMenu: 'blankInvoice',
    href: '/blank_invoice',
    color: 'text-teal-500'
  },
  {
    title: 'Md Transaction',
    icon: Coins,
    activeMenu: 'mdTransaction',
    href: '/md_transaction',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'All Md Transaction',
        href: '/md_transaction',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Ledger',
        href: '/md_transaction/ledger',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Delete Md Transaction ',
        href: '/md_transaction/delete',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Due List',
    icon: FileSpreadsheet,
    activeMenu: 'dueList',
    href: '/due_list',
    color: 'text-indigo-500',
    isChildren: true,
    children: [
      {
        title: 'Party Due',
        icon: Dot,
        color: 'text-red-500',
        href: '/due_list'
      },
      {
        title: 'Credit Due',
        icon: Dot,
        color: 'text-red-500',
        href: '/due_list/credit'
      },
      {
        title: 'Supplier Due',
        icon: Dot,
        color: 'text-red-500',
        href: '/due_list/supplier'
      }
    ]
  },
  {
    title: 'Banking',
    icon: Landmark,
    activeMenu: 'bank',
    href: '/bank',
    color: 'text-indigo-500',
    isChildren: true,
    children: [
      {
        title: 'All Bank',
        icon: Dot,
        color: 'text-red-500',
        href: '/bank'
      },
      {
        title: 'All Account',
        icon: Dot,
        color: 'text-red-500',
        href: '/bank/account'
      },
      {
        title: 'All Transaction',
        icon: Dot,
        color: 'text-red-500',
        href: '/bank/transaction'
      },
      {
        title: 'Delete Transaction',
        icon: Dot,
        color: 'text-red-500',
        href: '/bank/transaction/delete'
      },
      {
        title: 'Bank Ledger',
        icon: Dot,
        color: 'text-red-500',
        href: '/bank/ledger'
      }
    ]
  },
  {
    title: 'Ledger',
    icon: FileSpreadsheet,
    activeMenu: 'ledger',
    href: '/ledger',
    color: 'text-indigo-500',
    isChildren: true,
    children: [
      {
        title: 'Supplier Ledger',
        icon: Dot,
        color: 'text-red-500',
        href: '/ledger/supplier'
      },
      {
        title: 'Party Ledger',
        icon: Dot,
        color: 'text-red-500',
        href: '/ledger/party'
      },
      {
        title: 'Product Ledger',
        icon: Dot,
        color: 'text-red-500',
        href: '/ledger/product'
      }
    ]
  },
  {
    title: 'Customer Commitment',
    icon: Users,
    activeMenu: 'commitment',
    href: '/commitment',
    color: 'text-indigo-500'
  },
  {
    title: 'Report',
    icon: BarChart3,
    activeMenu: 'report',
    href: '/report',
    color: 'text-emerald-500',
    isChildren: true,
    children: [
      {
        title: 'Purchase Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/purchase'
      },
      {
        title: 'Purchase Item Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/purchase/purchase_item'
      },
      {
        title: 'Sale Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/sale'
      },
      {
        title: 'Sale Item Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/sale/sale_item'
      },
      {
        title: 'Income Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/income'
      },
      {
        title: 'Cost Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/cost'
      },
      {
        title: 'Profit',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/profit'
      },
      {
        title: 'Profit / Loss',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/profit_loss'
      },
      {
        title: 'Balance Sheet',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/balance_sheet'
      },
      {
        title: 'Closing Record',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/closing_record'
      },
      {
        title: 'Highest Sale Product',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/highest_sale'
      },
      {
        title: 'Lowest Sale Product',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/lowest_sale'
      },
      {
        title: 'Client Wise Highest Sale',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/client_highest_sale'
      },
      {
        title: 'Client Wise Lowest Sale',
        icon: Dot,
        color: 'text-red-500',
        href: '/report/client_lowest_sale'
      }
    ]
  },
  {
    title: 'Fixed Asset',
    icon: HandCoins,
    activeMenu: 'fixedAsset',
    href: '/fixed_asset',
    color: 'text-emerald-500',
    isChildren: true,
    children: [
      {
        title: 'Field of Fixed Asset',
        icon: Dot,
        color: 'text-red-500',
        href: '/fixed_asset/field'
      },
      {
        title: 'All Fixed Asset',
        icon: Dot,
        color: 'text-red-500',
        href: '/fixed_asset'
      },
      {
        title: 'Delete Fixed Asset',
        icon: Dot,
        color: 'text-red-500',
        href: '/fixed_asset/delete'
      }
    ]
  },
  {
    title: 'Services',
    icon: Settings2,
    activeMenu: 'service',
    href: '/service',
    color: 'text-orange-500',
    isChildren: true,
    children: [
      {
        title: 'All Order',
        icon: Dot,
        color: 'text-red-500',
        href: '/service/order'
      },
      {
        title: 'All Income',
        icon: Dot,
        color: 'text-red-500',
        href: '/service/income'
      },
      {
        title: 'Delete Income',
        icon: Dot,
        color: 'text-red-500',
        href: '/service/income/delete'
      },
      {
        title: 'All Expenditure',
        icon: Dot,
        color: 'text-red-500',
        href: '/service/expenditure'
      },
      {
        title: 'Delete Expenditure',
        icon: Dot,
        color: 'text-red-500',
        href: '/service/expenditure/delete'
      },
      {
        title: 'Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/service/report'
      }
    ]
  },
  {
    title: 'Employee',
    icon: Users2,
    activeMenu: 'employee',
    href: '/employee',
    color: 'text-orange-500',
    isChildren: true,
    children: [
      {
        title: 'Add Employee',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/add'
      },
      {
        title: 'All Employee',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee'
      },
      {
        title: 'Add Attendance',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/attendance/add'
      },
      {
        title: 'All Attendance',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/attendance'
      },
      {
        title: 'Add Salary',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/salary/add'
      },
      {
        title: 'All Salary',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/salary'
      },
      {
        title: 'All Advance Payment',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/advance_payment'
      },
      {
        title: 'Add Payment',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/payment/add'
      },
      {
        title: 'All Payment',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/payment'
      },
      {
        title: 'Salary Report',
        icon: Dot,
        color: 'text-red-500',
        href: '/employee/salary/report'
      }
    ]
  },
  {
    title: 'Mobile SMS',
    icon: MessageCircle,
    activeMenu: 'sms',
    href: '/sms',
    color: 'text-teal-500',
    isChildren: true,
    children: [
      {
        title: 'Send SMS',
        href: '/sms/send_sms',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Custom SMS',
        href: '/sms/custom_sms',
        icon: Dot,
        color: 'text-red-500'
      },
      {
        title: 'Report SMS',
        href: '/sms/report_sms',
        icon: Dot,
        color: 'text-red-500'
      }
    ]
  },
  {
    title: 'Settings',
    icon: Settings,
    activeMenu: 'setting',
    href: '/setting',
    color: 'text-teal-500'
  },
  {
    title: 'Set Privilege',
    icon: UserPlus,
    activeMenu: 'privilege',
    href: '/privilege',
    color: 'text-teal-500'
  }
]
