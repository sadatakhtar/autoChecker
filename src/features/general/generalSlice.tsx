import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: 'hello'
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setTest: (state, action) => {
            state.test = action.payload;
        }
    }
})

export const {
    setTest,
} = generalSlice.actions;

export const getTest = (state: any) => state.general.test;

export default generalSlice.reducer;