'use client'
import React, { useRef, useState } from 'react'
import SuperForm2 from '../components/superForm2'


function FormTest2() {
    const [state, setForm] = useState({firstName: "initial state", lastName: "initial state", address: "initial state"})
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const addressRef = useRef()
    const refArr = [firstNameRef, lastNameRef, addressRef]

    

    // handling the form with onsubmit with no state or refs
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            address: addressRef.current.value
        }
        console.log(data)
        setForm(data)
        e.target.reset()
    }   
console.log("state", state)
  return (
    <div>
        <h1>FormTest useActionState</h1>
        <h2>{state.firstName} {state.lastName}</h2>
        
        <SuperForm2 state={state} refArr={refArr} action={onSubmitHandler} />
    </div>
  )
}

export default FormTest2