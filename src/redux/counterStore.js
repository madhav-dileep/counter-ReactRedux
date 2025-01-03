import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'

// define logic to create readux store.
const counterStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default counterStore