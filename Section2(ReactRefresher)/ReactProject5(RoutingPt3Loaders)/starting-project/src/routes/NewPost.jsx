import classes from './NewPost.module.css'
import Modal from '../components/Modal'
import { useNavigate, Form , redirect} from 'react-router-dom'

function NewPost() {
	
	const nav = useNavigate()
	
	return (
		<Modal>
			<Form method='post' className={classes.form} onSubmit={()=>{}}>
				<p>
					<label htmlFor='body'>Text</label>
					<textarea id='body' name='body' required rows={3} />
				</p>
				<p>
					<label htmlFor='name'>Your name</label>
					<input type='text' id='name' name='author' required />
				</p>
				<p className={classes.actions}>
					<button type='submit'>Submit</button>
					<button type='button' onClick={nav.bind(this, -1)}>
						Cancel
					</button>
				</p>
			</Form>

			
		</Modal>
	)
}

export default NewPost

export async function action ({request}){
	const formData = await request.formData()
	const postData = Object.fromEntries(formData)
	console.log("Post Data from New Post", postData)

	await fetch('http://localhost:8080/posts', {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then(console.log)

	return redirect('/')
}

// export async function action ({request}){
// 	const formData = await request.formData()
// 	const postData = Object.fromEntries(formData)
// 	console.log("Post Data from New Post", postData)

// 	await fetch('http://localhost:8080/posts', {
// 		method: 'POST',
// 		body: JSON.stringify(postData),
// 		headers: {
// 			'Content-type': 'application/json',
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then(console.log)

// 	return redirect('/')
// }