import {Form,Input,Button}from "./view"

function InputField() {
    return (
        <Form>
            <Input type="input" placeholder="Enter your task"/>
            <Button type="submit">Go</Button>
        </Form>
    )
}

export default InputField
