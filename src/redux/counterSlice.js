import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            return { ...state, count: 0 }
        },
        IncrementbyAmt: (state, amtIncrement) => {
            state.count += amtIncrement.payload
        }
    }
})

export const { increment, decrement, reset, IncrementbyAmt } = counterSlice.actions
export default counterSlice.reducer