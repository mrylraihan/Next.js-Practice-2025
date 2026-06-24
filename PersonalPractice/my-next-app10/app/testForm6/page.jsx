'use client'
import React, { useReducer } from 'react'

const nameReducer = (prevState, action)=>{
  switch (action.type) {
		case 'FN':
			return { ...prevState, firstName: action.firstName }
		case 'LN':
			return { ...prevState, lastName: action.lastName }
		case 'FLN':
			return {fullName: `${prevState.lastName} ${prevState.firstName}`, firstName:"", lastName:"" }
		default:
			return prevState
	}
}
const initial ={
	firstName:'',
	lastName:'',
	fullName:''
}
function TestForm6() {
	const [nameState, dispatch] = useReducer(nameReducer, initial)
   console.log(nameState)
   const nameHandler =(e)=>{
	dispatch({type:e.target.id, [e.target.name]:e.target.value})
   }
//    const firstNameHandler =(e)=>{
// 	console.log(e.target.name)
// 	dispatch({type:"FN", firstName:e.target.value})
//    }
//    const lastNameHandler =(e)=>{
// 	dispatch({type:"LN", lastName:e.target.value})
//    }
  return (
	<>
		{nameState.fullName && <h1>{nameState.fullName}</h1>}
		<form onSubmit={(e)=>{
			e.preventDefault()
			dispatch({type: "FLN"})
		}}>
			<lable>
				First Name:
				<input
					id='FN'
					type='text'
					name='firstName'
					value={nameState.firstName}
					onChange={nameHandler}
					/>
			</lable>
			<lable>
				Last Name:
				<input
					id='LN'
					type='text'
					name='lastName'
					value={nameState.lastName}
					onChange={nameHandler}
					/>
			</lable>
			<button>submit</button>
		</form>
	</>
	)
}

export default TestForm6