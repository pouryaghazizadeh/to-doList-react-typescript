import React from 'react'
import { Todo } from '../../model/model'
import {MdModeEdit,MdDelete,MdDone}from "react-icons/md"
import {SingleTodos,SingleText,Icon} from "./view"
type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}
function SingleTodo({todos,setTodos,todo}:Props) {
    const handelDone=(id:number)=>{ 
        // setTodos(todos.map())
    }
    return (
        <SingleTodos>
            <SingleText>{todo.todo}</SingleText>
            <div>
                <Icon><MdModeEdit/></Icon>
                <Icon><MdDelete/></Icon>
                <Icon onClick={()=>handelDone(todo.id)}><MdDone/></Icon>
            </div>
            
        </SingleTodos>
    )
}

export default SingleTodo
