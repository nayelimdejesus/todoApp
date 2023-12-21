import React from 'react'

export const TodoForm = () => {
    return(
        // instead of div it will be form
        <form className = 'TodoForm'>TodoForm
            <input type = "text" className = 'todo-input' placeholder = 'New Todo'/>
            <button type = 'submit' className = 'todo-btn'></button>
        </form>
    )
}