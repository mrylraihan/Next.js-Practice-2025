import React from 'react'
import { useFormStatus } from 'react-dom'

function ButtonSubmit() {
     const status = useFormStatus()
     console.log('status in button submit', status)
  return (
    <div>
      <button type={"reset"}>reset</button>
      <button type={"submit"}>submit</button>
    </div>
  )
}

export default ButtonSubmit
