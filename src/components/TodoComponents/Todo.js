import React from 'react';

function Todo(props) {
    return (
        <div
            style={props.tasks.completed ? {textDecoration: 'line-through'} : null} 
            onClick={() => props.toggleComplete(props.task.id)}>
            <p >{props.task.task}</p>
        </div>
    )
}

export default Todo;