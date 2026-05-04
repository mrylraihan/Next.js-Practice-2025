'use client'
import { redirect } from 'next/navigation'
import React, { useActionState } from 'react'


const actionFn = (prev, formData)=>{
    console.log("prev:", prev)
    const object = Object.fromEntries(formData)
    console.log("after:",object)
    redirect('/')
}

function ActionFormTest() {
    const [data, actionHandler, pending] = useActionState(actionFn, {message:"Hello"})
    console.log(data)
    console.log(pending)
  return (
		<div>
			<h1>ActionFormTest</h1>
			<form action={actionHandler}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input type='text' id='name' name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input type='email' id='email' name='email' />
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default ActionFormTest