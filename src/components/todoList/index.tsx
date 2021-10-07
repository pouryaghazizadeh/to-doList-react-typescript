import React from 'react'
import { Todo } from "../../model/model";
import SingleTodo from '../singleTodo';
import {ContainerTodo}from "./view"
interface Props{
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos,setTodos}) =>{
    return (
        <ContainerTodo>
            {todos.map((todo)=>{
                return(<SingleTodo todo={todo} key={todo.id}
                    todos={todos}  setTodos={setTodos}
                />)
            })}
            
        </ContainerTodo>
    ) 
}

export default TodoList
