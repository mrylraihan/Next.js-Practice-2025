'use client'
import React, { useActionState } from 'react'
import SuperForm from '../components/superForm'

const formSubmitAction = async(prevState, formData)=>{
    console.log("prevState", prevState)
    const newFormData = Object.fromEntries(formData.entries())
    console.log("formData", newFormData)
    // return {message: "Form submitted successfully"}
    return newFormData
}

function FormTest() {
    const [state, formAction] = useActionState(formSubmitAction, {firstName: "initial state", lastName: "initial state", address: "initial state"})

    console.log("state", state) 

    // handling the form with onsubmit with no state or refs
    // const onSubmitHandler = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const data = Object.fromEntries(formData.entries())
    //     console.log(data)
    //     e.target.reset()
    // }   

  return (
    <div>
        <h1>FormTest useActionState</h1>
        <h2>{state.firstName} {state.lastName}</h2>
        {/* <form onSubmit={onSubmitHandler}> */}
        {/* <form  action={formAction}>
           <div>
            <label htmlFor="firstName">First Name:
                <input type="text" name='firstName' id='firstName'/>
            </label>
           </div>
           <div>
            <label htmlFor="lastName">Last Name:
                <input type="text" name='lastName' id='lastName'/>
            </label>
           </div>
           <button type="submit">submit</button>
        </form> */}
        <SuperForm state={state} action={formAction} />
    </div>
  )
}

export default FormTest