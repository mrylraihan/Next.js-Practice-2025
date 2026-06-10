import React from 'react'

function testform2() {
    async function getData(formData){
        "use server"
        const newData = Object.fromEntries(formData)
        console.log(newData.firstname, newData.lastname)
    }
  return (
    <div>
        <h1>Test form2</h1>
        <form action={getData}>
            <label htmlFor="firstname">first name:</label>
            <input type="text" id="firstname" name="firstname" />
            <br />
            <label htmlFor="lastname">last name:</label>
            <input type="text" id="lastname" name="lastname" />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default testform2