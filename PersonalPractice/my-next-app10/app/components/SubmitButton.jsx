'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const status = useFormStatus() 
    console.log(status)
    const submitHandler = ()=>{
        console.log(status)
        // redirect('/')
    }
  return (
		<div>
			<button type='submit' onClick={submitHandler}>
				Submit Button
			</button>
		</div>
	)
}

export default SubmitButton