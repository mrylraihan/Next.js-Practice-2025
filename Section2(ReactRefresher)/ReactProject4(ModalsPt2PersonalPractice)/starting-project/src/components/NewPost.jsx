import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({
	changeBodyHandler,
	changeAuthorHandler,
	inputValues,
	submitForm,
}) {
	return (
		<form className={classes.form} onSubmit={submitForm}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea
					id='body'
					required
					rows={3}
					onChange={changeBodyHandler}
					value={inputValues.body}
				/>
			</p>
			<p>
				<label htmlFor='name'>Your name</label>
				<input
					type='text'
					id='name'
					required
					onChange={changeAuthorHandler}
					value={inputValues.author}
				/>
			</p>
			<button type='submit'>Submit</button>
		</form>
	)
}

export default NewPost
