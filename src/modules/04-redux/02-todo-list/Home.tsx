import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAllTodos, todoSlice} from "./exercise/todoSlice";
import TodoList from "./exercise/TodoList";

function Home() {
    const allTodos = useSelector(selectAllTodos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(todoSlice.actions.addTodo({todo: {id: Date.now().toString(), text: "some text", isCompleted: false, deadline: null}}))
    }, []);
    return <div>
        <TodoList
            onComplete={todoId => dispatch(todoSlice.actions.removeTodo({todoId: todoId}))}
            todos={allTodos}
        />
    </div>
}

export default Home;