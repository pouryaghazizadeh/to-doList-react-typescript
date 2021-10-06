import { useState } from "react";
import InputField from "./components/form/index";
import { Todo } from "./components/model/model";
import { GlobalStyle } from "./GlobalStyle";

const App:React.FC =()=> {
  const [todo,setTodo]=useState<string >("")
  const[todos,setTodos]=useState<Todo[ ]>([])
  const handeleAdd = 
  return (
    <div className="App">
      <span className="title">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo}/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
