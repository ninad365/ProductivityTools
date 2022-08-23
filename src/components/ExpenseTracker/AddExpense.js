import React, { useState } from 'react'


export const AddExpense = (props) => {
    const [entry, setEntry] = useState('')
    const [amount, setAmount] = useState(0)
    const [totalIncome, settotalIncome] = useState(0)
    const [totalExpense, settotalExpense] = useState(0)


    function getEntryText(val) {
        setEntry(val.target.value)
    }
    function getEntryAmount(val) {
        setAmount(val.target.value)
    }

    function addExpenseButtonClick(){
        if (entry === ''){
            alert("Please set the name for the transaction")
        }
        else if (amount === 0){
            alert("The amount can not be zero")
        }
        else{
            props.addExpenseClick(entry, amount)
            setEntry('')
            setAmount(0)
        }
    }

    return (
        <div className='form'>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <input value={entry} type="text" className="form-control" aria-label="Sizing example input" onChange={getEntryText} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-5">
                        <input value={amount} type="number" className="form-control" aria-label="Sizing example input" onChange={getEntryAmount} aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-primary" onClick={addExpenseButtonClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
