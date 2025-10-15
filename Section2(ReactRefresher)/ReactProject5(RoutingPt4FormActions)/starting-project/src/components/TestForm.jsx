import React from 'react'
import { useState } from 'react'

function TestForm() {
	const [formDataList, setFormDataList] = useState([{ name: '', age: 0 }])
	const addAnotherForm = () => {
		setFormDataList((prev) => [...prev, { name: '', age: 0 }])
	}
	const onChangeHandler = (e, idx) => {
		setFormDataList((prev) => {
			return prev.map((ele, id) => {
				// return idx == id ? {...ele,[e.target.name]: e.target.value}
				if (idx == id) {
					return { ...ele, [e.target.name]: e.target.value }
				}
				return ele
			})
		})
	}
	const removeAnotherForm = ( idx) => {
		// e.preventDefault()
		setFormDataList((prev) => {
			return prev.filter((ele, id) => id != idx)
		})
	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
		console.log(formDataList)
		setFormDataList([{ name: '', age: 0 }])
	}
	console.log(formDataList)
	return (
		<div>
			<button onClick={addAnotherForm}>+</button>
			{formDataList.map((formElement, idx) => {
				return (
					<div key={idx}>
							<form>
							<div>
								<label>
									name:
									<input
										type='text'
										name={'name'}
										value={formElement.name}
										onChange={(e) => onChangeHandler(e, idx)}
									/>
								</label>

								<label>
									age:
									<input
										type='number'
										name={'age'}
										value={formElement.age}
										onChange={(e) => onChangeHandler(e, idx)}
									/>
								</label>
							</div>
					<button type='button' onClick={() => removeAnotherForm( idx)}>-</button>
					</form>
						</div>
				)
			})}
			<button>submit</button>
		</div>
	)
}

export default TestForm
