// "use server"
import React from 'react'

async function TestForm() {
    async function getFormData(formData) {
        "use server"
        const object = Object.fromEntries(formData)
        console.log(object)
        
    }   
  return (
		<div>
			<h1>Test Form</h1>
			<form action={getFormData}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input type='text' id='name' name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input type='text' id='email' name='email' />
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default TestForm