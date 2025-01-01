import AllTransactions from '@/Components/Transaction/AllTransactions'
import { transactions } from '@/utils/ListTransactions'
import React from 'react'

export default function Transaction() {
  return (
    <AllTransactions transactions={transactions}/>
  )
}
