import React from 'react'

export const AddExpense = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    )
}
