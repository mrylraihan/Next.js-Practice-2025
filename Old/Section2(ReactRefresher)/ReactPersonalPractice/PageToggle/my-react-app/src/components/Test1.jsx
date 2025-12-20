import React from 'react'

function Test1(props) {
  return (
		<div>
			<h1>Test 1</h1>
			<button
				onClick={() => {
					props.setToggle(!props.toggle)
				}}>
				toggle
			</button>
		</div>
	)
}

export default Test1
