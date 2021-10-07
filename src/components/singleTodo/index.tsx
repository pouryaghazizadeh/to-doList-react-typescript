import React, { useState } from 'react'
import { MdDelete, MdDone, MdModeEdit } from "react-icons/md"
import { Todo } from '../../model/model'
import { Icon, SingleText, SingleTextNotDone, SingleTodos } from "./view"
// type for props
type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}
function SingleTodo({todos,setTodos,todo}:Props) {
// make use state for edit card
const [edit,setEdit]=useState<boolean>(false)
// useState to update text that changed
const[editTodo,setEditTodo]=useState<string>(todo.todo)

    // functions to done 
    const handelDone=(id:number)=>{ 
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
          );
    }
    //  functions to delete
    const handelDelete= (id:number)=>{
        setTodos(todos.filter ((todo)=> todo.id!==id))
       

    }

    return (
        <SingleTodos>
            {
                todo.isDone ? (
                    <SingleTextNotDone className="todos__single--text">{todo.todo}</SingleTextNotDone>
                  ) : (
                
                      <SingleText>{todo.todo}</SingleText>
                  )
            }
            <div>
                <Icon onClick={()=>{
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                      }
                }
                     
                }><MdModeEdit/></Icon>
                 <Icon onClick={()=>handelDelete(todo.id)}><MdDelete  /></Icon>
                <Icon onClick={()=>handelDone(todo.id)}><MdDone/></Icon>
            </div>
            
        </SingleTodos>
    )
}

export default SingleTodo
