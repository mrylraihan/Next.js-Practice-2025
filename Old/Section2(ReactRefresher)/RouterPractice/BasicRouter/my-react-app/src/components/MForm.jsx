import React from 'react'
import { useState } from 'react'

function MForm() {
	const [data, setData] = useState([])
	// const nameChangeHandler = (e, idx) => {
    //     setData(prev=>{
    //         const oldData = prev[idx]
    //         const newData = {...oldData, [e.target.name]:e.target.value}
    //         prev[idx] = newData
    //         return [...prev ]

    //     })
	// }
	// const nameChangeHandler = (e, idx) => {
    //     const oldData = data[idx]
    //     const newData = {...oldData, [e.target.name]:e.target.value}
    //     data[idx] = newData
	// 	setData([...data ])
	// }

	// const nameChangeHandler = (e, idx) => {
	// 	setData((prev) => {
    //         return prev.map((ele, id)=>{
    //             if(id == idx){
    //                 return {...ele, [e.target.name]:e.target.value}
    //             }
    //                 return ele
    //         })
			
	// 	})
	// }

	const nameChangeHandler = (e, idx) => {
		setData(prev =>
        prev.map((ele, id) =>
            id === idx
                ? { ...ele, [e.target.name]: e.target.value }
                : ele
        )
    )
	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
		setData([{ name: '', age: '' }])
	}
	const addAnotherForm = () => {
		setData((prev) => {
			return [...prev, { name: '', age: '' }]
		})
	}
    const removeForm = (idx)=>{
        setData(prev=>{
            return prev.filter((ele, id)=>id!=idx)
        })
    }
	let content = data.map((ele, idx) => {
		return (
			<div key={idx}>
				<div>
					<label>
						name:
						<input
							type='text'
							value={ele.name}
							name='name'
							onChange={(e) => nameChangeHandler(e, idx)}
						/>
					</label>
				</div>
				<div>
					<label>
						age:
						<input
							type='text'
							value={ele.age}
							name='age'
							onChange={(e) => nameChangeHandler(e, idx)}
						/>
					</label>
				</div>
				<button type='button' onClick={removeForm.bind(this, idx)}>
					remove
				</button>
			</div>
		)
	})
	console.log(data)
	return (
		<div>
			<h1>Multi Form</h1>
			<div>
				<button onClick={addAnotherForm}>+</button>
				<form onSubmit={onSubmitHandler}>
					{(data.length !== 0 )? content:<h3>No Forms</h3>}
					<button>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default MForm
