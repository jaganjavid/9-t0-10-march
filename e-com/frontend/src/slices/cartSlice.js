
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {

            // console.log(action);

            const item = action.payload;

            console.log(item);

        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;