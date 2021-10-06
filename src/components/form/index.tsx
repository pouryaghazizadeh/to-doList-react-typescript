import {Form,Input,Button}from "./view"
interface props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField:React.FC<props> =({setTodo,todo})=> {
    
    return (
        <Form>
            <Input type="input" placeholder="Enter your task" value={todo}
            onChange={(e)=>{
                setTodo(e.target.value)
            }}
            />
            <Button type="submit">Go</Button>
        </Form>
    ) 
}

export default InputField
