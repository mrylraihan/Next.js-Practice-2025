import React, { useRef } from 'react'
import { useMyContext } from '../hooks/useMyContext'

function About() {
    const {setName} = useMyContext()
    const inputRef = useRef()
    const submitHandler = () =>{
        setName(inputRef.current.value)
        inputRef.current.value = ''
    }
  return (
		<div>
			<h1>About</h1>
			<div>
				<input type='text' ref={inputRef} />
			</div>
			<button onClick={submitHandler}>Submit</button>
		</div>
	)
}

export default About
