import React from 'react'

export function NetIncomeExpense(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-3'>
          <div className="card text-bg-success">
            <h5 className='card-title'>Net Income</h5>
            <p>{props.totalIncome}</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text-bg-danger">
            <h5 className='card-title'>Net Expense</h5>
            <p>{props.totalExpense}</p>
          </div>
        </div>
        <div className='col-sm-3'></div>
      </div>
    </div>
  )
}
