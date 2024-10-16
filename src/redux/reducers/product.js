import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: 1,
        name: "product 1",
        desc: "description",
        category: "category_id",
        price: 3990
    },
]

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        newProduct: (state, action) => {
            state = action.payload
        }
    }
});

export const { newProduct }= productSlice.actions;
export default productSlice.reducer;