import React, { useState } from 'react'

function TestForm() {
    const [formData, setFormData] = useState({})
    const [arrData, setArrData] = useState([])
    const setFormDataHandler = e =>{
        setFormData(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }
    const onsubmitHandler = e =>{
        e.preventDefault()
        if (JSON.stringify(formData) != '{}') {
					setArrData((prev) => prev.concat(formData))
					setFormData({})
					e.target.reset()
				}
    }
    console.log(formData)
    console.log(arrData)
  return (
		<div>
			<form onChange={setFormDataHandler} onSubmit={onsubmitHandler}>
				<label>
					Name:
					<input type='text' name='name' />
				</label>
				<label>
					age:
					<input type='text' name='age' />
				</label>
                <button>submit</button>
			</form>
		</div>
	)
}

export default TestForm
