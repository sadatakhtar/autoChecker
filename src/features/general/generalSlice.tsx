import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: 'hello',
    data: null,

}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setTest: (state, action) => {
            state.test = action.payload;
        },
        setData: (state, action )=> {
            state.data = action.payload;
        }, 
     
    }
})

export const {
    setTest,
    setData,
} = generalSlice.actions;

export const getTest = (state: any) => state.general.test;
export const getData = (state: any) => state.general.data;

export default generalSlice.reducer;