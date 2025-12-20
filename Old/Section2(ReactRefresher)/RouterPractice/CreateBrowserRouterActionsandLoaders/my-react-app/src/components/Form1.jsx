import React from 'react'
import { Form, redirect } from 'react-router-dom';

function Form1() {
  return (
    <div>
      <h1>Form 1</h1>
      <Form method='post' action='/form'>
        <div>
            <label>
                <input type="text" name='name' />
            </label>
        </div>
        <button>submit</button>
      </Form>
    </div>
  )
}

export default Form1

export const action = async ({request}) => {
    const formData = await request.formData();
    const newData = Object.fromEntries(formData);
    console.log(newData)
    return redirect('/');
}