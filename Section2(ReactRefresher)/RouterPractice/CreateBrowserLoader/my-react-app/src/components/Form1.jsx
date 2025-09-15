import React from 'react'
import { Form } from 'react-router-dom'

function Form1() {
  return (
    <div>
      <Form method='post'>
        <div>
            <label>First Name:
                <input type="text" name="first-name" />
            </label>
        </div>
        <div>
            <label>Last Name:
                <input type="text" name="last-name" />
            </label>
        </div>
        <div>
            <label>Address:
                <input type="text" name="address" />
            </label>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default Form1

// export async function action({ request }) {
// 	const formData = await request.formData()
// 	console.log(Object.fromEntries(formData))
// 	return redirect('/')
// }