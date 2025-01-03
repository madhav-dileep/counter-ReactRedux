import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, IncrementbyAmt, reset } from "../redux/counterSlice"
import { useState } from "react"



const Counter = () => {

    const { count } = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    const [amtIncrement, setAmtIncrement] = useState(0)

    const handleIncrementByAmt = () => {
        if (amtIncrement) {
            dispatch(IncrementbyAmt(+amtIncrement))
        } else {
            alert("Please enter a valid amount!")
        }
    }

    return (
        <div className='mt-3 border rounded p-5 bg-dark-subtle'>
            <div className='d-flex gap-3 justify-content-around align-items-center' >
                <button style={{ fontSize: "2rem", minWidth: "60px", textAlign: "center" }} className='btn btn-warning rounded-5 me-5' onClick={() => dispatch(decrement())}>-</button>
                <div style={{ fontSize: "3rem", minWidth: "60px", textAlign: "center" }}>{count}</div>
                <button style={{ fontSize: "2rem", minWidth: "60px", textAlign: "center" }} className='btn btn-success ms-5 rounded-5' onClick={() => dispatch(increment())}>+</button>
            </div>
            <button className='btn btn-danger mt-3 form-control fs-5' onClick={() => dispatch(reset())}>Reset</button>
            <div className='container-fluid input-group d-flex mt-4'>
                <input onChange={(e) => { setAmtIncrement(e.target.value) }} className='form-control fs-5' type="number" min={0} placeholder='Increment By' /><button onClick={handleIncrementByAmt} className='btn btn-primary fs-5'>Increment</button>
            </div>
        </div>
    )
}

export default Counter