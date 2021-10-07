import React from 'react'
import { Todo } from '../model/model'
import {MdModeEdit,MdDelete,MdDone}from "react-icons/md"
type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}
function SingleTodo({todos,setTodos,todo}:Props) {
    return (
        <form>
            <span>{todo.todo}</span>
            <div>
                <span><MdModeEdit/></span>
                <span><MdDelete/></span>
                <span><MdDone/></span>
            </div>
            
        </form>
    )
}

export default SingleTodo
