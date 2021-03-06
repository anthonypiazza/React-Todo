// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return <div>{props.tasks.map((task) => <Todo task={task} key={task.id} toggleComplete={props.toggleComplete} />)}</div>;
}
export default TodoList;

// - Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
// - Once a todo is submitted, the Todo List should re-render and show the added todo. -->