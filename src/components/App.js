import React from 'react'
import './App.css'
import TaskList from './TaskList.js'
import Task from './Task'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TaskList,
    }
    this.handleChange = this.handleChange.bind(this)
    this.inputReceived = this.inputReceived.bind(this)
  }

  handleChange(id) {
    this.setState(function (prevState) {
      const updatedTaskList = prevState.todos.map(function (thisTask) {
        if (id === thisTask.id) {
          return {
            id: thisTask.id,
            text: thisTask.text,
            completed: !thisTask.completed,
          }
        } else {
          return thisTask
        }
      })
      return {
        todos: updatedTaskList,
      }
    })
  }

  inputReceived(event) {
    if (event.key === 'Enter') {
      this.setState(function (prevState) {
        const newTask = {
          id: prevState.todos.length + 1,
          text: event.target.value,
          completed: false,
        }
        event.target.value = ''
        return {
          todos: [...prevState.todos, newTask],
        }
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <h3>Task List</h3>
        <input type='text' onKeyDown={this.inputReceived}></input>
        {this.state.todos.map((currentTask) => (
          <Task
            className='Task'
            key={currentTask.id}
            id={currentTask.id}
            text={currentTask.text}
            completed={currentTask.completed}
            handleChange={this.handleChange}
          ></Task>
        ))}
      </div>
    )
  }
}

export default App
