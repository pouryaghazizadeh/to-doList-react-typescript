import {Form,Input,Button}from "./view"
interface props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<props> =({setTodo,todo,handleAdd})=> {

    return (
        <Form onSubmit={handleAdd}>
            <Input type="input" placeholder="Enter your task" value={todo}
            onChange={(e)=>{
                setTodo(e.target.value)
            }}
            />
            <Button type="submit" >Go</Button>
        </Form>
    ) 
}

export default InputField
