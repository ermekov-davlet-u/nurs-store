import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {
        newCategory: (state, action) =>{
            state = action.payload
        }
    }
});

export const { newCategory } = categorySlice.actions;

export default categorySlice.reducer