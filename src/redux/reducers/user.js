import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        newUser: (state, action) => {
            state = action.payload
        }
    }
});

export const { newUser } = userSlice.actions;
export default userSlice.reducer