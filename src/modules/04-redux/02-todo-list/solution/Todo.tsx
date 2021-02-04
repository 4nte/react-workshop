import React from 'react';
import {Todo as TodoType, todoSlice} from "./todoSlice";
import styled from "styled-components";
import {useAppDispatch} from "./store";

const Container = styled.div`
      padding: 20px;
    `

type Props = {
    todo: TodoType,
}
function Todo(props: Props) {

    const dispatch = useAppDispatch()

    const handleChangeText = (value: string) => dispatch(todoSlice.actions.setTodoText({todoId: props.todo.id, text: value}))
    const handleChangeCompleted = (isCompleted: boolean) => dispatch(todoSlice.actions.completeTodo({todoId: props.todo.id, isCompleted: isCompleted}))
    return <Container>
        <textarea value={props.todo.text} onChange={e => handleChangeText(e.target.value)} />
        <div>isCompleted: <input type="checkbox" checked={props.todo.isCompleted} onChange={e => handleChangeCompleted(e.target.checked)}/></div>

    </Container>
}

export default Todo;