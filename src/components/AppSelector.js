import React from 'react'
import {
    Link,
} from "react-router-dom";

export default function AppSelector() {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-3'></div>
                <div className='col-3'>
                    <Link to="/ExpenseTracker" className="nav-link">
                        <div className="card text-center custom-card">
                            <h5 className="card-title">Expense Tracker</h5>
                        </div>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link to="/Calculator" className="nav-link">
                        <div className="card text-center custom-card">
                            <h5 className="card-title">Calculator</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
