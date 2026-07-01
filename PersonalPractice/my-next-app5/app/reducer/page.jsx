'use client'
import React, { useReducer } from 'react'

const initial = {firstName:'', lastName:''}
const actionHandler = (prev, action)=>{
    if(action.type == "firstName"){
    return {...prev, firstName:action.firstName}
    }else if(action.type == "lastName"){
    return {...prev, lastName:action.lastName}
    }else{
        return initial
    }
}
function page() {
    const [data, dispatch] = useReducer(actionHandler, initial)
    console.log(data)
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch({type:"reset"})
    }
    const onChangeHandler = (e)=>{
      console.log(e.target.id)
      console.log(e.target.name)
        dispatch({type:[e.target.id], [e.target.name]:e.target.value})
    }
  return (
    <div>
        <h1>useReducer</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">
            <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={onChangeHandler}/>
        </label>
        <label htmlFor="lastName">
            <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={onChangeHandler}/>
        </label>
        <button type={'submit'}>submit</button>
      </form>
    </div>
  )
}

export default page
