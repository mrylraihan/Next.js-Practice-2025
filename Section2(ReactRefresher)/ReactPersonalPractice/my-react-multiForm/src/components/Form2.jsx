import React, { useState } from 'react'
import styles from './Form1.module.css'
function Form2() {
	const [formInput, setFormInput] = useState([{name:"", age:"", address:""}])

	const onChangeHandler = (e,idx) =>{
		setFormInput(prev=>{
			return prev.map((ele, index)=>{
				return idx == index ? {...ele, [e.target.name] : e.target.value} : ele
			})
		})
	}
	// const onChangeHandler = (e,idx) =>{
	// 	setFormInput(prev=>{
	// 		return prev.map((ele, index)=>{
	// 			if(idx == index ){
	// 				ele[e.target.name] = e.target.value
	// 				return ele
	// 			}else{
	// 				return ele
	// 			}
	// 		})
	// 	})
	// }

	// const onChangeHandler = (e,idx) =>{
	// 	setFormInput(prev=>{
	// 		prev[idx][e.target.name] = e.target.value
	// 		return [...prev]
	// 	})
	// }
	const addAnotherInput = ()=>{
		setFormInput((prev) => [...prev, { name: '', age: '', address: '' }])
	}
	const removeAnotherInput = (e, idx)=>{
		e.target.disable
		if (formInput.length>1){
			setFormInput((prev) => {
				return prev.filter((ele, id) => {
					return id != idx
				})
			})
		}
	}

	const onSubmitHandler = e =>{
		e.preventDefault()
		console.log(formInput)
		setFormInput([{ name: '', age: '', address: '' }])
	}
	console.log(formInput)
	return (
		<form onSubmit={onSubmitHandler}>
			{formInput.map((formInp, idx) => {
				return (
					<div className={styles.formStyle} key={idx}>
						<div className={styles.formGroupStyle}>
							<label className={styles.labelStyle}>Name:</label>
							<input
								type='text'
								value={formInp.name}
								name={'name'}
								onChange={(e) => onChangeHandler(e, idx)}
							/>
						</div>
						<div className={styles.formGroupStyle}>
							<label className={styles.labelStyle}>age:</label>
							<input
								type='text'
								value={formInp.age}
								name={'age'}
								onChange={(e) => onChangeHandler(e, idx)}
							/>
						</div>
						<div className={styles.formGroupStyle}>
							<label className={styles.labelStyle}>address:</label>
							<input
								type='text'
								value={formInp.address}
								name={'address'}
								onChange={(e) => onChangeHandler(e, idx)}
							/>
						</div>
						<div className={styles.formGroupStyle}>
							<button type='button' onClick={(e)=>removeAnotherInput(e, idx)}>
								-
							</button>
						</div>
					</div>
				)
			})}
			<button type='submit'>submit</button>
			<button type='button' onClick={addAnotherInput}>
				+
			</button>
		</form>
	)
}

export default Form2
