import React, { useState } from "react";
import InputField from "./components/form/index";
import { Todo } from "./model/model";
import { GlobalStyle } from "./GlobalStyle";
import TodoList from "./components/todoList/index"
const App:React.FC =()=> {
  const [todo,setTodo]=useState<string>("")
  const[todos,setTodos]=useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent)=>{
    // for see event type search it in google
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),
      todo,isDone:false
     }])
     setTodo("")
     console.log(todos);
 
    }
    

  }
  return (
    <div className="App">
      <span className="title">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo}  handleAdd={ handleAdd}/>
      <GlobalStyle/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
