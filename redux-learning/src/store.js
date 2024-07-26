
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";


// Create a store
const store = configureStore({
    reducer: {
        counter:counterReducer
    }
});


export default store;   

