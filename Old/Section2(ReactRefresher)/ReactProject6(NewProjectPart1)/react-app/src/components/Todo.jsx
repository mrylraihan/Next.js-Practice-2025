import React from 'react'

function Todo(props) {
  return (
		<div className='card'>
			<h2>{props.title}</h2>
			<button className='btn' onClick={()=>props.deleteHandler()}>
				Delete
			</button>
		</div>
	)
}

export default Todo
