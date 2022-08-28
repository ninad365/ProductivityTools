import React from 'react'

export function NetIncomeExpense(props) {
  return (
    <div>
      <p>{props.totalIncome}</p>
      <p>{props.totalExpense}</p>
    </div>
  )
}
