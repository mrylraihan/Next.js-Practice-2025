"use client"
import styles from "./page.module.css";
import bladeRunner from "../public/bladerunner.jpg";
import Image from "next/image";
import { useRef } from "react";
// import { useState } from "react";
export default function Home() {
  const formRef = useRef()
  // const [selected, setSelected] = useState('Option 1')
  // console.log(selected)
  // console.log(process.env.SECRET_KEY)
  const formActionHandler = async (formData) => {
    // 'use server';
    const data = Object.fromEntries(formData)
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    console.log(firstName, lastName)
    console.log(data)
    formRef.current.reset()
  } 
  return (
		<>
			<div className={styles.page}>
				<main className={styles.main}>
					<h1 className={styles.title}>Home Page</h1>
					<div>
						<form ref={formRef} action={formActionHandler}>
							<input
								type='text'
								name='firstName'
								placeholder='Enter your first name'
							/>
							<input
								type='text'
								name='lastName'
								placeholder='Enter your last name'
							/>
							<button type='submit'>Submit</button>
						</form>
					</div>

					<div>
						{/* <select
							onChange={(e) => {
								setSelected(e.target.value)
							}}>
							<option value='Option 1'>Option 1</option>
							<option value='Option 2'>Option 2</option>
							<option value='Option 3'>Option 3</option>
						</select> */}
					</div>
					<Image
						src={bladeRunner}
						alt='Blade Runner'
						width={800}
						height={600}
					/>
				</main>
			</div>
		</>
	)
}
