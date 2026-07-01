'use client'
import React, { useActionState } from 'react'

const initial = {firstName:'', lastName:''}
const actionHandler = (state, formData)=>{
    const data = Object.fromEntries(formData)
    console.log(data)
    return data
}
function page() {
    const [data, action] = useActionState(actionHandler, initial)
    console.log(data)
  return (
     <div>
        <h1>useActionState</h1>
      <form action={action}>
        <label htmlFor="firstName">
        </label>
            <input type="text" id="firstName" name="firstName"/>
        <label htmlFor="lastName">
        </label>
            <input type="text" id="lastName" name="lastName"/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default page
