import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {todoSlice} from "./todoSlice";


export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    }
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>

