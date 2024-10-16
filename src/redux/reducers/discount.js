import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const discountSlice = createSlice({
    name: "discount",
    initialState: initialState,
    reducers: {
        newDiscount: (state, action) => {
            state = action.payload;
        }
    }
});

export const { newDiscount } = discountSlice.actions;
export default discountSlice.reducer;