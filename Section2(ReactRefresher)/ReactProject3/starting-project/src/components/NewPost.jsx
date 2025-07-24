import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({ setData }) {
	const [enteredBody, setEnteredBody] = useState({})
	const onChangeHandler = (e) => {
		setEnteredBody((prev) => {
			return { ...prev, [e.target.id]: e.target.value }
		})
	}
	const onsubmitHandler = (e) => {
		e.preventDefault()
		setData(prev=>{
            return [enteredBody, ...prev]
        })
		setEnteredBody({})
		e.target.reset()
	}
	console.log(enteredBody)
	return (
		<form
			className={classes.form}
			onChange={onChangeHandler}
			onSubmit={onsubmitHandler}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} />
			</p>
			{/* <p>{enteredBody}</p> */}
			<p>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' required />
			</p>
			<button type='submit'>submit</button>
		</form>
	)
}

export default NewPost
