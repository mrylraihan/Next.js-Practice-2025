'use client'
import React, { useReducer } from 'react'

const initial = {
    firstName: "",
    lastName: "",
    fullName: ""
}
const nameReducer = (state, action)=>{
    if(action.type === "firstName"){
        return {
            ...state,
            firstName: action.payload
        }
    }
    else if(action.type === "lastName"){
        return {
            ...state,
            lastName: action.payload
        }
    }
    else if(action.type === "fullName"){
        return {
            ...state,
            fullName: `${state.firstName} ${state.lastName}`
        }
    }
    else{
        return initial
    }
}
function ReducerPractice() {
    const [state, dispatch] = useReducer(nameReducer, initial)
    console.log(state)

    const onchangeHandler = (e)=>{
        console.log("id:", e.target.id)
        console.log("value:", e.target.value)
        dispatch({type: e.target.id, payload: e.target.value})
    }
    const onSubmitHandler = (e) =>{
            e.preventDefault()
            dispatch({type: "fullName"})
        }
  return (
    <div>
        <h1>Reducer Practice</h1>
        <form  onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="firstName">First Name:
                    <input type="text" id="firstName" value={state.firstName} onChange={onchangeHandler}/>
                </label>
            </div>
            <div>
                <label htmlFor="lastName">Last Name:
                    <input type="text" id="lastName" value={state.lastName} onChange={onchangeHandler}/>
                </label>
            </div>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default ReducerPractice