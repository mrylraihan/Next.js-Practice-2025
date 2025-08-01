import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({
	changeBodyHandler,
	changeAuthorHandler,
	isModalOpen,
}) {
	return (
		<form className={classes.form}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} onChange={changeBodyHandler} />
			</p>
			<p>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' required onChange={changeAuthorHandler} />
			</p>
			<button onClick={isModalOpen}>submit</button>
		</form>
	)
}

export default NewPost
