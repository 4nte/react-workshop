import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: 0,
    reducers: {
        add: (state, action: PayloadAction<number>) => state + action.payload,
        multiply: (state, action: PayloadAction<number>) => state * action.payload,
        divide: (state, action: PayloadAction<number>) => state / action.payload,
    }
})
export const selectValue = (state: RootState) => state.calculator