'use client'
import React, { useReducer } from 'react'
import { useFormState } from 'react-dom'
import FormSubmit from './form-submit'

const turnOnOff = (prev, action)=>{
	if(action.type == 'on'){
		return {...prev, isOn:true, actionhandler: "on"}
	}else if(action.type =='off'){
		return {...prev, isOn:false, actionhandler: "off"}
	}

}

function PostForm({ createPost }) {
	const [stateR, dispatch] = useReducer(turnOnOff, {
		isOn: true,
		actionhandler: "on",
	})
	const [state, formAction] = useFormState(createPost, {})
	console.log(stateR)
	return (
		<>
			<h1>Create a new post</h1>
			<form action={formAction}>
				<p className='form-control'>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' name='title' />
				</p>
				<p className='form-control'>
					<label htmlFor='image'>Image URL</label>
					<input
						type='file'
						accept='image/png, image/jpeg'
						id='image'
						name='image'
					/>
				</p>
				<p className='form-control'>
					<label htmlFor='content'>Content</label>
					<textarea id='content' name='content' rows='5' />
				</p>
				<p className='form-actions'>
					<FormSubmit />
				</p>
            {state.errors && <ul className='form-errors'>
                {state.errors.map(err=><li key={err}>{err}</li>)}
                </ul>}
			</form>
			<div>
				<button onClick={()=>{
					dispatch(stateR.actionhandler == "on"?{type:'off'}:{type:'on'})
				}}>reducer example</button>
			</div>
		</>
	)
}

export default PostForm
