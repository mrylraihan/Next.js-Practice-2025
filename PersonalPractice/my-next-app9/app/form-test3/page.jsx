"use client"
import React, { use, useActionState } from 'react'

const handleFormActions = (initial,formData)=>{
    console.log("initial", initial)
    console.log("formData", formData)
   
    const data = Object.fromEntries(formData)
    console.log(data)
    return data
}

function FormTest3() {
    const [data, actions]= useActionState(handleFormActions, {message:"initial state"})
    console.log("data", data)
  return (
    <div>
        <h1>Form Test 3</h1>
        <form action={actions}>
            <div>
                <label htmlFor="firstName">First Name:
                    <input type="text" id='firstName' name='firstName' />
                </label>
            </div>
            <div>
                <label htmlFor="lastName">Last Name:
                    <input type="text" id='lastName' name='lastName' />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormTest3