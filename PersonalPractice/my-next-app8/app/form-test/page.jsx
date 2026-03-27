'use client'
import React from 'react'
import FormSubmissionBtn from './components/form-submission-btn';

function FormTest() {
    const formRef = React.useRef();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formdata = new FormData(formRef.current);
        const data = Object.fromEntries(formdata.entries())
        console.log(data);
        formRef.current.reset();
    }
  return (
    <div>
        <h1>FormTest</h1>
        <form onSubmit={onSubmitHandler} ref={formRef}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
             <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormTest