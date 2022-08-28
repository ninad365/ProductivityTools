import React, { useState } from 'react'

import { Transactions } from './ExpenseTracker/Transactions';
import { NetIncomeExpense } from './ExpenseTracker/NetIncomeExpense';
import { Header } from './ExpenseTracker/Header';
import { AddIncome } from './ExpenseTracker/AddIncome';
import { AddExpense } from './ExpenseTracker/AddExpense';

function ExpenseTracker() {
  let default_transactions = [
  ]

  const [transactions, setEntries] = useState(default_transactions)
  const [totalIncome, settotalIncome] = useState(0)
  const [totalExpense, settotalExpense] = useState(0)

  function addExpenseClick(transaction, amount) {
    let new_trans = transactions.concat({ id: Math.floor(Math.random() * 100000000), text: transaction, value: amount }) // Adds new transaction object to the list of transactions
    setEntries(new_trans)

    let tE = 0
    let tI = 0
    new_trans.forEach(element => {
      if (element.value > 0) {
        tI += Number(element.value)
      } else {
        tE += Number(element.value)
      }
    });

    settotalIncome(tI)
    settotalExpense(tE)
  }

  return (
    <div className="App">
      < Header />
      < NetIncomeExpense totalExpense={totalExpense} totalIncome={totalIncome} />
      < Transactions transactions={transactions} />
      < AddIncome />
      < AddExpense addExpenseClick={(transaction, amount) => addExpenseClick(transaction, amount)} />
    </div>
  );
}

export default ExpenseTracker;
