import React from 'react'
import FormSubmit from '../components/FormSubmit'


function TestForm5() {

	async function getData(prevState, formData) {
		'use server'
		console.log('prevState', prevState)
		const newData = Object.fromEntries(formData)
		console.log("newData", newData)
		return newData
	}
   
  return <FormSubmit num={5} action={getData} defaultObj={{firstname:"", lastname:''}} />
}

export default TestForm5