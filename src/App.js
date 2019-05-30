import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      taskInput: ''
    }
  }
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = (event) => {
    event.preventDefault();
    const newTask ={
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskInput: ''
    }) 
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList tasks={this.state.tasks} />    
        <TodoForm taskInput={this.state.taskInput} changeHandler={this.changeHandler} addTask={this.addTask} />     
      </div>
    );
  }
}

export default App;


// - The `task` field is the todo title that will be shown to the user.
// - The `completed` field should default to `false` and will be the field that we toggle when we complete a todo.
// - The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.
