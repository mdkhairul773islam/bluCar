import React from 'react'
import { Metadata } from 'next'
import AddCommitment from './_components/AddCommitment'
import { Commitment, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Customer Commitment'
}

async function getData(): Promise<Commitment[]> {
  return [
    {
      id: '1',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '2',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '3',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '4',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '5',
      customer_name: 'MD. ROBIN MIA (M03775)	',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'HATIBER, UTHURA-2240,BHALUKA,MYMENSINGH	'
    },
    {
      id: '6',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '7',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '8',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '54-5k tayar=49k	',
      address: 'KASHIGONJ.TRISAL.MYMENSINGH	'
    },
    {
      id: '9',
      customer_name: 'MD. MAMUN KHAN (M03702)',
      date: '2019-09-07	',
      mobile: '01770212118',
      commitment: '35+35K	',
      address: 'NOUPARA,AKHRAOIL-2220,TRISAL,MYMENSINGH	'
    },
    {
      id: '10',
      customer_name: 'MST AMBIA KHATUN[ HABIBULLH]	',
      date: '2019-09-07	',
      mobile: '01780019578',
      commitment: 'halkhata',
      address: 'SHOLHASIA GAFFARGAON MYMENSINGH	'
    }
  ]
}

const CommitmentPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='commitment' />

      {/* Panel Header */}
      <PanelHeader title='Customer Commitment'>
        <AddCommitment />
      </PanelHeader>

      {/* Commitment Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default CommitmentPage
