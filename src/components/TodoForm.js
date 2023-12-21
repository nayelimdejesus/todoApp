import React, {useState} from 'react'

export const TodoForm = () => {
    const[value, setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        console.log(value)
    }

    return(
        // instead of div it will be form
        <form className = 'TodoForm' onSubmit = {handleSubmit}>TodoForm
            <input type = "text" className = 'todo-input' placeholder = 'New Todo' onChange = {(event) => console.log(event.target.value)}/>
            <button type = 'submit' className = 'todo-btn'>Add new Task</button>
        </form>
    )
}