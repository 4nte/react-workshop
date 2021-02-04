import React from 'react';
import {Todo as TodoType} from "./todoSlice";
import Todo from "./Todo";

function TodoList(props: { todos: TodoType[], onComplete: (todoId: string) => void }) {

    return <>
        {props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </>
}

export default TodoList;