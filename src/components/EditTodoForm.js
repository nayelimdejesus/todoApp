import React, {useState} from 'react'

// add prop
export const EditTodoForm = ({editTodo, task}) => {
    const[value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        editTodo(value, task.id);

        setValue("");
    }

    return(
        // instead of div it will be form
        <form className = 'TodoForm' onSubmit = {handleSubmit}>
            <input type = "text" className = 'todo-input' value = {value} placeholder = 'Edit Task' onChange={(event) => setValue(event.target.value)}/>
            <button type = 'submit' className = 'todo-btn'>Update Task</button>
        </form>
    )
}