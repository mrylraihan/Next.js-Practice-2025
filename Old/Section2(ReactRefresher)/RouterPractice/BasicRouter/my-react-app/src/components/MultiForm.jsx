import React, { useState } from 'react'

function MultiForm() {
	const [data, setData] = useState([{ name: '', age: '' }])
	console.log(data)
	const addAnoterForm = () => {
		setData((prev) => {
			return [...prev, { name: '', age: '' }]
		})
	}
    const removeForm = (idx)=>{
        setData(prev=>{
            return prev.filter((ele, id)=>id!=idx)
        })  
    }
	const onChangeHandler = (e, id) => {
        let element = data[id]
        element[e.target.name] = e.target.value
        data[id] = element
        setData([...data])
        console.log(data)
        // Another way
		// setData((prev) => {
        //    return prev.map((ele, idx)=>{
        //     if(idx==id){
        //         return {...ele, [e.target.name]:e.target.value} 
        //     }else{
        //         return ele
        //     }
        // })
		// })
	}
	const content = data.map((ele, idx) => {
		return (
			<div key={idx}>
				<hr />
				<div>
					<label>
						<input
							type='text'
							name='name'
							onChange={(e) => onChangeHandler(e, idx)}
							value={ele.name}
						/>
					</label>
				</div>
				<div>
					<label>
						<input
							type='text'
							name='age'
							onChange={(e) => onChangeHandler(e, idx)}
							value={ele.age}
						/>
					</label>
				</div>
				<button type={'button'} onClick={removeForm.bind(this, idx)}>
					-
				</button>
			</div>
		)
	})
	return (
		<div>
			<h1>Multi-Form2</h1>
			<button onClick={addAnoterForm}>+</button>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					console.log(data)
					e.target.reset()
					setData({ name: '', age: '' })
				}}>
				{data.length > 0 ? content : <h3>No Forms</h3>}
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default MultiForm
