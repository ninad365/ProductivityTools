import React from 'react'

export const Transactions = (props) => {
    console.log(props.transactions)
    console.log(typeof(props.transactions))
    const transactions = props.transactions;

    const listItems = transactions.map((transaction) =>
        <li className="list-group-item list-group-item-success" key={transaction.id}>{transaction.text} - {transaction.value}</li>
    );

    return (
        <div>
            <h2>
                Transactions
            </h2>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )
}
