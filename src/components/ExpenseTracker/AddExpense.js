import React, { useState } from 'react'


export const AddExpense = (props) => {
    const [entry, setEntry] = useState('')
    const [amount, setAmount] = useState(0)


    function getEntryText(val) {
        setEntry(val.target.value)
    }
    function getEntryAmount(val) {
        setAmount(val.target.value)
    }

    return (
        <div className='form'>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <input type="text" className="form-control" aria-label="Sizing example input" onChange={getEntryText} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-5">
                        <input type="number" className="form-control" aria-label="Sizing example input" onChange={getEntryAmount} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-primary" onClick={() => props.addExpenseClick(entry, amount)}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
