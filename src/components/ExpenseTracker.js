import React, { useState } from 'react'

import { Transactions } from './ExpenseTracker/Transactions';
import { NetIncomeExpense } from './ExpenseTracker/NetIncomeExpense';
import { Header } from './ExpenseTracker/Header';
import { AddIncome } from './ExpenseTracker/AddIncome';
import { AddExpense } from './ExpenseTracker/AddExpense';

function ExpenseTracker() {
    let default_transactions = [
      {
        id:2,
        text:"Salary",
        value:50000,
      },
      {
        id:1,
        text:"Interest",
        value:1200,
      },
      {
        id:3,
        text:"Electricity bill",
        value:-1200,
      }
    ]

  const [transactions, setEntries] = useState(default_transactions)

  function addExpenseClick(transaction, amount) {
    let new_tran = transactions.concat({id:Math.floor(Math.random() * 100000000), text: transaction, value: amount})
    console.log('parent' + typeof(new_tran))
    setEntries(new_tran)
  }

  return (
    <div className="App">
      < Header />
      < NetIncomeExpense />
      < Transactions transactions= {transactions}/>
      < AddIncome />
      < AddExpense addExpenseClick={(transaction, amount) => addExpenseClick(transaction, amount)} />
    </div>
  );
}

export default ExpenseTracker;
