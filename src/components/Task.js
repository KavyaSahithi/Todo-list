import React from 'react'

function Task(props) {
  return (
    <div className='list-group-item'>
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
            {' '}
            {props.text}
          </span>
        ) : (
          <span
            style={{
              fontSize: '20px',
            }}
          >
            {' '}
            {props.text}
          </span>
        )}
      </p>
    </div>
  )
}
export default Task
