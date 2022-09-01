import React from 'react'

export const Transactions = (props) => {
    const transactions = props.transactions;

    const listItems = transactions.length === 0 ? <p>There are no transactions</p> : transactions.map((transaction) =>
        <li className={`my-1 list-group-item ${transaction.value > 0 ? 'list-group-item-success' : 'list-group-item-danger'}`}
            key={transaction.id}>{transaction.text} : {transaction.value}</li>
    );

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <h2>
                        Transactions
                    </h2>
                    <ul className="list-group">
                        {listItems}
                    </ul>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    )
}
