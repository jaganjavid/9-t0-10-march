import { createSlice } from "@reduxjs/toolkit";


const testSlice = createSlice({

    name:"test",
    initialState:{value:"test"},
    reducers: {
        updateTest: (state, action) => {
            state.value = action.payload; 
        }
    }

    
})

export const { updateTest } = testSlice.actions;

export default testSlice.reducer;