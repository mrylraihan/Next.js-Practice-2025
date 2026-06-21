'use client'
import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

function FormSubmit({num, action, defaultObj}) {
    const [data, actionHandler, isPending] = useActionState(action, defaultObj)
    const status = useFormStatus()
    console.log("isPending", isPending)
    console.log('data', data)
    console.log("status",status)
  return (
		<div>
			<h1>Test form: {num}</h1>
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

export default FormSubmit
