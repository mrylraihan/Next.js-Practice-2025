import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({ onCancel, onAddPost }) {
	const [enteredBody, setEnteredBody] = useState('')
	const [enteredAuthor, setEnteredAuthor] = useState('')

	const changeBodyHandler = (e) => {
		setEnteredBody(e.target.value)
	}
	const changeAuthorHandler = (e) => {
		setEnteredAuthor(e.target.value)
	}
	const submitHandler = (e) => {
		e.preventDefault()
		console.log(e)
		console.log('test')
		const postData = {
			author: enteredAuthor,
			body: enteredBody,
		}
		console.log(postData)
		onAddPost(postData)
		onCancel()
	}
	console.log('1')
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} onChange={changeBodyHandler} />
			</p>
			<p>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' required onChange={changeAuthorHandler} />
			</p>
			<p className={classes.actions}>
				<button type='submit'>Submit</button>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
			</p>
		</form>
	)
}

export default NewPost
