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

  addTask = (e) => {
    e.preventDefault();
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

  toggleComplete = (id) => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          if (task.id === id) {
            return ({...task, completed: !task.completed});
          } else {
            return task;
          }
        })
      }
    })
  }

  clearComplete = (e) => {
    this.setState(prevState => {
      return {...prevState, tasks: prevState.tasks.filter(task => task.completed ===false)}
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList tasks={this.state.tasks} toggleComplete={this.toggleComplete} />    
        <TodoForm taskInput={this.state.taskInput} clearComplete={this.clearComplete} changeHandler={this.changeHandler} addTask={this.addTask} />     
      </div>
    );
  }
}

export default App;


// - The `task` field is the todo title that will be shown to the user.
// - The `completed` field should default to `false` and will be the field that we toggle when we complete a todo.
// - The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.
