import React from 'react'

export function NetIncomeExpense(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <div className="card text-bg-success">
            <h5 className='card-title'>Income</h5>
            <p>{props.totalIncome}</p>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className="card text-bg-danger">
            <h5 className='card-title'>Expense</h5>
            <p>{props.totalExpense}</p>
          </div>
        </div>
      </div>
    </div>
    )
}
