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
      <div className='row h-100 justify-content-center align-items-center'>
        <div className='column'>
          <div className='card App' style={{ width: '50rem' }}>
            <div
              className='card-header'
              style={{
                backgroundColor: '#e6f2fa',
                color: '#4c7591',
              }}
            >
              <h2 className='card-title'>TASK LIST</h2>
              <input
                type='text'
                placeholder='Enter the new task'
                onKeyDown={this.inputReceived}
                style={{ border: '5px solid white' }}
              ></input>
            </div>
            <div className='card card-body'>
              {this.state.todos.map((currentTask) => (
                <Task
                  className='Task list-group list-group-flush'
                  key={currentTask.id}
                  id={currentTask.id}
                  text={currentTask.text}
                  completed={currentTask.completed}
                  handleChange={this.handleChange}
                ></Task>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
