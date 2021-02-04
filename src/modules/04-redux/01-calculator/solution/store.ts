import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {calculatorSlice} from "./calculatorSlice";

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice.reducer,
    }
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>

