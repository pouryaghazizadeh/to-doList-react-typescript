import React, { useEffect, useRef, useState } from 'react'
import { MdDelete, MdDone, MdModeEdit } from "react-icons/md"
import { Todo } from '../../model/model'
// style
import { EditTodoInput, Icon, SingleText, SingleTextNotDone, SingleTodos } from "./view"
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
// functions to edit text
const handelEdit = (e:React.FormEvent,id:number )=>{
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);

}

// to focus on input
const inputRef = useRef<HTMLInputElement>(null)
useEffect(()=>{
inputRef.current?.focus()
},
[edit])

    return (
        <SingleTodos  onSubmit={(e)=>handelEdit(e,todo.id)}>
            {edit?(
                <EditTodoInput ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
            ):(
                
                    todo.isDone ? (
                        <SingleTextNotDone className="todos__single--text">{todo.todo}</SingleTextNotDone>
                      ) : (
                    
                          <SingleText>{todo.todo}</SingleText>
                      )
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
