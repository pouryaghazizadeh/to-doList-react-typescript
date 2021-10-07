import { useRef } from "react"
import { Button, Form, Input } from "./view"
interface props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<props> =({setTodo,todo,handleAdd})=> {
const inputRef = useRef<HTMLInputElement >(null)
    return (
        <Form onSubmit={(e)=>{handleAdd(e)
        inputRef.current?.blur()}}>
            
            <Input type="input" placeholder="Enter your task" value={todo}
            onChange={(e)=>{
                setTodo(e.target.value)
            }}  ref={inputRef}
            
            />
            <Button type="submit" >Go</Button>
      
        </Form>
    ) 
}

export default InputField
