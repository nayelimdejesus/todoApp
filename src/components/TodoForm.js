import React, {useState} from 'react'

// add prop
export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(value)

        setValue("")
    }

    return(
        // instead of div it will be form
        <form className = 'TodoForm' onSubmit = {handleSubmit}>TodoForm
            <input type = "text" className = 'todo-input' value = {value} placeholder = 'New Todo' onChange = {(event) => console.log(event.target.value)}/>
            <button type = 'submit' className = 'todo-btn'>Add new Task</button>
        </form>
    )
}