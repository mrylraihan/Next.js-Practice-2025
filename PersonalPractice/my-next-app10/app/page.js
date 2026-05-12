"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useActionState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nameActions } from '../store/nameslice';


// const getData = (prev, formData)=>{
// 	console.log("prev:", prev)
// 	const object = Object.fromEntries(formData)
// 	console.log("after:",object)
// 	return object
// }

export default function Home() {
	const selector = useSelector(state=>state.nameSlice)
	const dispatch = useDispatch()
	
	const getData = async (prev, formData) => {
		console.log('prev:', prev)
		const object = Object.fromEntries(formData)
		console.log('after:', object)
		dispatch(nameActions.getFormData(object)) 
		
		return object
	}

	const [data, actionHandler] = useActionState(getData, {message:"Hello"})
	
  console.log("selector:", selector)
  return (
		<div className={styles.page} style={{ border: '1px solid blue' }}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src='/next.svg'
					alt='Next.js logo'
					width={100}
					height={20}
					priority
				/>
				<form action={actionHandler}>
					<div>
						<label htmlFor='name'>
							Name:
							<input type='text' id='name' name='name' />
						</label>
					</div>
					<div>
						<label htmlFor='age'>
							Age:
							<input type='text' id='age' name='age' />
						</label>
					</div>
					<div>
						<label htmlFor='email'>
							Email:
							<input type='email' id='email' name='email' />
						</label>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</main>
		</div>
	)
}
