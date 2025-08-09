import React, { useState } from 'react'
import styles from './Form1.module.css'
function Form1() {
	const [formInput, setFormInput] = useState({name:"", age:"", address:""})

	const onChangeHandler = e =>{
		setFormInput(prev=>{
			return {...prev, [e.target.name]:e.target.value}
		})
	}
	const onSubmitHandler = e =>{
		e.preventDefault()
		console.log(formInput)
		setFormInput({ name: '', age: '', address: '' })
	}
	console.log(formInput)
	return (
		<form onSubmit={onSubmitHandler}>
			<div className={styles.formStyle}>
				<div className={styles.formGroupStyle}>
					<label className={styles.labelStyle}>Name:</label>
					<input
						type='text'
						value={formInput.name}
						name={'name'}
						onChange={onChangeHandler}
					/>
				</div>
				<div className={styles.formGroupStyle}>
					<label className={styles.labelStyle}>age:</label>
					<input
						type='text'
						value={formInput.age}
						name={'age'}
						onChange={onChangeHandler}
					/>
				</div>
				<div className={styles.formGroupStyle}>
					<label className={styles.labelStyle}>address:</label>
					<input
						type='text'
						value={formInput.address}
						name={'address'}
						onChange={onChangeHandler}
					/>
				</div>
			</div>
			<button>submit</button>
			<button>+</button>
		</form>
	)
}

export default Form1
