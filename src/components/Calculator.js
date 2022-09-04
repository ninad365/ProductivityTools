import React, { useState } from 'react'

function Calculator() {
    const [data, setData] = useState("")
    function getData(val) {
        setData(val.target.value)
    }
    function handleOnclick(event) {
        event.preventDefault();
        try {
            var ans = eval(data)
            setData(ans)
        }
        catch {
            alert('Invalid input format')
        }
    }
    return (
        <div className='container App'>
            <h1>Calculator</h1>
            <form>
                <div className="mb-3 container">
                    <label className="form-label">Please enter the expression to evaluate</label>
                    <input type="text" className="form-control" onChange={getData} value={data} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleOnclick}>Evaluate</button>
            </form>
        </div>
    );
}

export default Calculator;
