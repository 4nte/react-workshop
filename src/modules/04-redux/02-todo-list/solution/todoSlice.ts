import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export type Todo = {
    id: string;
    text: string;
    deadline: Date | null;
    isCompleted: boolean;
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
            state.push(action.payload.todo)
        },
        completeTodo: (state, action: PayloadAction<{ todoId: string, isCompleted: boolean }>) => {
            const todo = state.find(todo => todo.id === action.payload.todoId);
            if (todo === undefined) {
                throw Error("Todo not found")
            }

            todo.isCompleted = action.payload.isCompleted;
        },
        removeTodo: (state, action: PayloadAction<{ todoId: string }>) => state.filter(todo => todo.id !== action.payload.todoId),
        setTodoText: (state, action: PayloadAction<{ todoId: string, text: string }>) => {
            const todo = state.find(todo => todo.id === action.payload.todoId);
            if (todo === undefined) {
                throw Error("Todo not found")
            }
            todo.text = action.payload.text;
        },

    }
})

export const selectAllTodos = (state: RootState) => state.todos
export const selectAllCompletedTodos = (state: RootState) => state.todos.filter(todo => todo.isCompleted)
export const selectAllUncompletedTodos = (state: RootState) => state.todos.filter(todo => !todo.isCompleted)
export const selectAllTodosWithDeadline = (state: RootState) => state.todos.filter(todo => todo.deadline !== null)