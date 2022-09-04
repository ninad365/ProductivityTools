import React from 'react'

export function NetIncomeExpense(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="card mt-3">
            <h5 className='card-title'>Net Income</h5>
            <h3 className='text-success'>Rs. {props.totalIncome}</h3>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className="card mt-3">
            <h5 className='card-title'>Net Expense</h5>
            <h3 className='text-danger'>Rs. {props.totalExpense}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
