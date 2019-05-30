import React from 'react';

function TodoForm(props) {
    return(
        <form className="form" onSubmit={props.addTask}>
            <input 
                type="text"
                name="taskInput" 
                placeholder="...todo"
                value={props.taskInput}
                onChange={props.changeHandler}
            />
            <button onClick={props.addTask}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
