import { Label } from '@/components/ui/label'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const SetPrivilege = () => {
  return (
    <ScrollArea>
      <form className='min-w-[800px] pb-4'>
        <div className='flex flex-col divide-y rounded border'>
          <div className='grid grid-cols-[300px_1fr] divide-x bg-muted'>
            <div className='p-3 text-center font-medium text-gray-600 dark:text-white'>
              Menu Item
            </div>
            <div className='p-3 text-center font-medium text-gray-600 dark:text-white'>
              Navbar Items
            </div>
          </div>

          {/* Dashboard Menu  */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='dashboard' />
                <Label htmlFor='dashboard'>Dashboard</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-purchase' />
                  <Label htmlFor='today-purchase'>TODAY{"'"}S Purchase</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-sale' />
                  <Label htmlFor='today-sale'>TODAY{"'"}S Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-due' />
                  <Label htmlFor='today-due'>TODAY{"'"}S Due</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-paid' />
                  <Label htmlFor='today-paid'>TODAY{"'"}S Paid</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='bank-tt' />
                  <Label htmlFor='bank-tt'>Bank To T.T</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='supplier-paid' />
                  <Label htmlFor='supplier-paid'>Supplier Paid</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='bank-withdraw' />
                  <Label htmlFor='bank-withdraw'>Bank Withdraw</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='client-collection' />
                  <Label htmlFor='client-collection'>Client Collection</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='bank-deposit' />
                  <Label htmlFor='bank-deposit'>Bank Deposit</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='cash-tt' />
                  <Label htmlFor='cash-tt'>Cash to T.T</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-cost' />
                  <Label htmlFor='today-cost'>Today{"'"}S Cost</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-income' />
                  <Label htmlFor='today-income'>Today{"'"}S Income</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='customer' />
                  <Label htmlFor='customer'>Customer</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='manufacturer' />
                  <Label htmlFor='manufacturer'>Manufacturer</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='product' />
                  <Label htmlFor='product'>Product</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='invoice' />
                  <Label htmlFor='invoice'>Invoice</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-commitment' />
                  <Label htmlFor='today-commitment'>
                    Today Commitment{"'"}s List
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='today-cash-commitment' />
                  <Label htmlFor='today-cash-commitment'>
                    Today Cash Commitment{"'"}s List
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='installment-list' />
                  <Label htmlFor='installment-list'>Installment List</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Menu  */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='reference' />
                <Label htmlFor='reference'>Reference</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-reference' />
                  <Label htmlFor='add-reference'>Add Reference</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-reference' />
                  <Label htmlFor='all-reference'>All Reference</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Category Menu  */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='category' />
                <Label htmlFor='category'>Category</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-category' />
                  <Label htmlFor='add-category'>Add Category</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-category' />
                  <Label htmlFor='all-category'>All Category</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Menu  */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='brand' />
                <Label htmlFor='brand'>Brand</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-brand' />
                  <Label htmlFor='add-brand'>Add Brand</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-brand' />
                  <Label htmlFor='all-brand'>All Brand</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Showroom Menu  */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='showroom' />
                <Label htmlFor='showroom'>Showroom</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-showroom' />
                  <Label htmlFor='add-showroom'>Add Showroom</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-showroom' />
                  <Label htmlFor='all-showroom'>All Showroom</Label>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='product' />
                <Label htmlFor='product'>Product</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-product' />
                  <Label htmlFor='add-product'>Add Product</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-product' />
                  <Label htmlFor='all-product'>All Product</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Menu  */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='orders' />
                <Label htmlFor='orders'>Orders</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'></div>
          </div>

          {/* Barcode Menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='barcode' />
                <Label htmlFor='barcode'>Barcode</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='barcode-setting' />
                  <Label htmlFor='barcode-setting'>Barcode Setting</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='barcode-print' />
                  <Label htmlFor='barcode-print'>Barcode Print</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='barcode-generate' />
                  <Label htmlFor='barcode-generate'>Barcode Generate</Label>
                </div>

                <div className='flex items-center space-x-2'>
                  <Switch id='purchase-wise-barcode-print' />
                  <Label htmlFor='purchase-wise-barcode-print'>
                    Purchase Wise Barcode Print
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Supplier menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='supplier' />
                <Label htmlFor='supplier'>Supplier</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-supplier' />
                  <Label htmlFor='add-supplier'>Add Supplier </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-supplier' />
                  <Label htmlFor='all-supplier'>All Supplier</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-transaction' />
                  <Label htmlFor='add-transaction'>Add Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-transaction' />
                  <Label htmlFor='all-transaction'>All Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-transaction' />
                  <Label htmlFor='delete-transaction'>Delete Transaction</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Zone menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='zone' />
                <Label htmlFor='zone'>Zone</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'></div>
          </div>

          {/* Party menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='party' />
                <Label htmlFor='party'>Party</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-party' />
                  <Label htmlFor='add-party'>Add Party</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-party' />
                  <Label htmlFor='all-party'>All Party</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='payable-party' />
                  <Label htmlFor='payable-party'>Payable Party List</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='receivable-party' />
                  <Label htmlFor='receivable-party'>
                    Receivable Party List
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-transaction' />
                  <Label htmlFor='add-transaction'>Add Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-transaction' />
                  <Label htmlFor='all-transaction'>All Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-transaction' />
                  <Label htmlFor='delete-transaction'>Delete Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='collection-report' />
                  <Label htmlFor='collection-report'>Collection Report</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Stock menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='stock' />
                <Label htmlFor='stock'>Stock</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'></div>
          </div>

          {/* Datewise Stock menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='date-wise-stock' />
                <Label htmlFor='date-wise-stock'>Datewise Stock</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'></div>
          </div>

          {/* Stock Transfer menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='stock-transfer' />
                <Label htmlFor='stock-transfer'>Stock Transfer</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='stock-transfer' />
                  <Label htmlFor='stock-transfer'>Stock Transfer</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-stock-transfer' />
                  <Label htmlFor='all-stock-transfer'>
                    History Of Stock Transfer{' '}
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-stock-transfer' />
                  <Label htmlFor='delete-stock-transfer'>
                    History Of Delete Stock Transfer
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Damage Product menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='damage-product' />
                <Label htmlFor='damage-product'>Damage Product</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-damage-product' />
                  <Label htmlFor='add-damage-product'>Add Damage Product</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-damage-product' />
                  <Label htmlFor='all-damage-product'>All Damage Product</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-damage-product' />
                  <Label htmlFor='delete-damage-product'>
                    Delete Damage Product
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Chalan menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='chalan' />
                <Label htmlFor='chalan'>Chalan</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-chalan' />
                  <Label htmlFor='add-chalan'>Add Chalan </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-chalan' />
                  <Label htmlFor='all-chalan'>All Chalan</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Sale menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='Sale' />
                <Label htmlFor='Sale'>Sale</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-sale' />
                  <Label htmlFor='add-sale'>Add Sale All Sale Return</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-sale' />
                  <Label htmlFor='all-sale'>All Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='hire-sale' />
                  <Label htmlFor='hire-sale'>Hire Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-hire-sale' />
                  <Label htmlFor='all-hire-sale'>All Hire Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-sale' />
                  <Label htmlFor='delete-sale'>Delete Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-preorder-sale' />
                  <Label htmlFor='add-preorder-sale'> Add Preorder Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-preorder-sale' />
                  <Label htmlFor='all-preorder-sale'>All Pre Order Sale</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='search-items-wise' />
                  <Label htmlFor='search-items-wise'>Search Items Wise</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='sale-return' />
                  <Label htmlFor='sale-return'>Sale Return</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-sale-return' />
                  <Label htmlFor='all-sale-return'>All Sale Return</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Income menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='income' />
                <Label htmlFor='income'>Income</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='income-field' />
                  <Label htmlFor='income-field'>Field of Income </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-income' />
                  <Label htmlFor='all-income'>Add Income</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-income' />
                  <Label htmlFor='all-income'>All Income</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-income' />
                  <Label htmlFor='delete-income'>Delete Income</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Cost  menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='cost' />
                <Label htmlFor='cost'>Cost</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='cost-field' />
                  <Label htmlFor='cost-field'>Field of Cost </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-cost' />
                  <Label htmlFor='all-cost'>Add Cost</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-cost' />
                  <Label htmlFor='all-cost'>All Cost</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-cost' />
                  <Label htmlFor='delete-cost'>Delete Cost</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Invoice  menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='bank-invoice' />
                <Label htmlFor='bank-invoice'>Bank Invoice</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'></div>
          </div>

          {/* Md Transaction menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='md-transaction' />
                <Label htmlFor='md-transaction'>Md Transaction</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-md-transaction' />
                  <Label htmlFor='add-md-transaction'>Add Md Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-md-transaction' />
                  <Label htmlFor='all-md-transaction'>All Md Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='delete-md-transaction' />
                  <Label htmlFor='delete-md-transaction'>
                    Delete Md Transaction
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Due List menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='due-list' />
                <Label htmlFor='due-list'>Due List</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='party-due' />
                  <Label htmlFor='party-due'>Party Due</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='credit-party-due' />
                  <Label htmlFor='credit-party-due'>Credit Party Due</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='Supplier Due' />
                  <Label htmlFor='Supplier Due'>Supplier Due</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Banking menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='banking' />
                <Label htmlFor='banking'>Banking</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-bank' />
                  <Label htmlFor='add-bank'>Add Bank</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-account' />
                  <Label htmlFor='add-account'>Add Account</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-account' />
                  <Label htmlFor='all-account'>All Account</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-transaction' />
                  <Label htmlFor='add-transaction'>Add Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-transaction' />
                  <Label htmlFor='all-transaction'>All Transaction</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='bank-ledger' />
                  <Label htmlFor='bank-ledger'>Bank ledger</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Ledger menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='ledger' />
                <Label htmlFor='ledger'>Ledger</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='supplier-ledger' />
                  <Label htmlFor='supplier-ledger'>Supplier Ledger</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='client-ledger' />
                  <Label htmlFor='client-ledger'>Client Ledger</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='product-ledger' />
                  <Label htmlFor='product-ledger'>Product Ledger</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Commitment menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='customer-commitment' />
                <Label htmlFor='customer-commitment'>Customer Commitment</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='add-customer-commitment' />
                  <Label htmlFor='add-customer-commitment'>
                    Add Customer Commitment
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='all-customer-commitment' />
                  <Label htmlFor='all-customer-commitment'>
                    All Customer Commitment
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Settings menu */}
          <div className='grid grid-cols-[300px_1fr] divide-x'>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex items-center space-x-2'>
                <Switch id='setting' />
                <Label htmlFor='setting'>Settings</Label>
              </div>
            </div>
            <div className='p-3 font-medium text-gray-600 dark:text-white'>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center space-x-2'>
                  <Switch id='header-setting' />
                  <Label htmlFor='header-setting'>Header Setting</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='social-icon' />
                  <Label htmlFor='social-icon'>Social Icon</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Switch id='favicon-banner' />
                  <Label htmlFor='favicon-banner'>Banner/Favicon</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}

export default SetPrivilege
