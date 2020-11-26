import React from 'react'

function Task(props) {
  return (
    <div>
      <p>
        <input
          type='checkbox'
          onChange={() => {
            props.handleChange(props.id)
          }}
          checked={props.completed}
        />
        {props.completed ? (
          <span
            style={{
              color: 'grey',
              fontStyle: 'italic',
              textDecoration: 'line-through',
            }}
          >
            {props.id} . {props.text}
          </span>
        ) : (
          <span>
            {props.id} . {props.text}
          </span>
        )}
      </p>
    </div>
  )
}
export default Task
