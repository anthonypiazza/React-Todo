import React from 'react';


function Todo(props) {
    return (
        <div
            className={`task${props.task.completed ? ' completed' : ''}`}
            onClick={() => props.toggleComplete(props.task.id)}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;