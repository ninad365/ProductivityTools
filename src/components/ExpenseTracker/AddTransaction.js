import React, { useState } from 'react'


export const AddTransaction = (props) => {
    const [entry, setEntry] = useState('')
    const [amount, setAmount] = useState(0)


    function getEntryText(val) {
        setEntry(val.target.value)
    }
    function getEntryAmount(val) {
        setAmount(val.target.value)
    }

    function addExpenseButtonClick() {
        if (entry === '') {
            alert("Please set the name for the transaction")
        }
        else if (amount === 0) {
            alert("The amount can not be zero")
        }
        else {
            props.addExpenseClick(entry, amount)
            setEntry('')
            setAmount(0)
        }
    }

    return (
        <div className='form'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <input value={entry} type="text" className="form-control" aria-label="Sizing example input" onChange={getEntryText} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-3">
                        <input value={amount} type="number" className="form-control" aria-label="Sizing example input" onChange={getEntryAmount} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-outline-primary" onClick={addExpenseButtonClick}>  Add  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
