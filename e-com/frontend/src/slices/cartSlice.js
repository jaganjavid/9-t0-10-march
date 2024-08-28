
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItem:[] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {

        const item = action.payload;

        // console.log(item);

        const existItem = state.cartItem.find((a) => a._id === item._id);
  
        if (existItem) {

          state.cartItem = state.cartItem.map((a) =>
            a._id === existItem._id ? item : a
          );

        } else {
          state.cartItem = [...state.cartItem, item];
        }
  
        // Calculate items price
        state.itemsPrice = state.cartItem.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        ).toFixed(0);
  
        // Shipping price (if 100 rs free)
        state.shippingPrice = state.itemsPrice > 100 ? 0 : 20;
  
        // GST Price
        state.taxPrice = Number(0.18 * state.itemsPrice);
  
        // Total Price
        state.totalPrice =
          Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice);
  
        localStorage.setItem("cart", JSON.stringify(state));
      },
      removeFromCart:(state, action) => {

           state.cartItem = state.cartItem.filter((x) => x._id !== action.payload);

           // Calculate items price
           state.itemsPrice = state.cartItem.reduce(
            (acc, item) => acc + item.price * item.qty,
            0
          ).toFixed(0);
    
          // Shipping price (if 100 rs free)
          state.shippingPrice = state.itemsPrice > 100 ? 0 : 20;
    
          // GST Price
          state.taxPrice = Number(0.18 * state.itemsPrice);
    
          // Total Price
          state.totalPrice =
            Number(state.itemsPrice) +
            Number(state.shippingPrice) +
            Number(state.taxPrice);
    
          localStorage.setItem("cart", JSON.stringify(state));

      }
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  
  export default cartSlice.reducer;