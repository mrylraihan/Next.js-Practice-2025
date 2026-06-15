import React from 'react'
import SubmitButton from '../components/SubmitButton'

function testform3() {
    async function getData(formData){
        "use server"
        const newData = Object.fromEntries(formData)
        console.log(newData)
    }
  return (
    <div>
        <h1>Test form3</h1>
        <form action={getData}>
            <label htmlFor="firstname">first name:</label>
            <input type="text" id="firstname" name="firstname" />
            <br />
            <label htmlFor="lastname">last name:</label>
            <input type="text" id="lastname" name="lastname" />
            <br />
            <SubmitButton />
        </form>
    </div>
  )
}

export default testform3