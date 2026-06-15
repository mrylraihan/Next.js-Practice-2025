'use client'
import React, { useActionState } from 'react'

async function getData(prevState, formData) {
    console.log('prevState', prevState)
	const newData = Object.fromEntries(formData)
	console.log("newData", newData)
}

function TestForm4() {
    const [data, actionHandler, isPending] = useActionState(getData, {
			firstname: '',
			lastname: '',
		})
  return (
		<div>
			<h1>Test form4</h1>
			<form action={actionHandler}>
				<label htmlFor='firstname'>first name:</label>
				<input type='text' id='firstname' name='firstname' />
				<br />
				<label htmlFor='lastname'>last name:</label>
				<input type='text' id='lastname' name='lastname' />
				<br />
				<button type='submit'>submit</button>
			</form>
		</div>
	)
}

export default TestForm4