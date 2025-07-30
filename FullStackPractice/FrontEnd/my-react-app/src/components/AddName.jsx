import React from 'react'
import { useState } from 'react'

function AddName() {
	const [formData, setFormData] = useState({ name: '', age: 0 })
	const onChangeForm = (e) => {
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
		const nameArr = formData.name.split(' ')
		console.log(nameArr)

		fetch('http://localhost:3030/names', {
			method: 'POST',
			body: JSON.stringify({
				firstName: nameArr[0],
				lastName: nameArr[1],
				age: formData.age,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json))
	}
	console.log(formData)
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Name
						<input
							type='text'
							value={formData.name}
							name='name'
							onChange={onChangeForm}
						/>
					</label>
				</div>
				<div>
					<label>
						Age:
						<input
							type='number'
							value={formData.age}
							name='age'
							onChange={onChangeForm}
						/>
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default AddName
