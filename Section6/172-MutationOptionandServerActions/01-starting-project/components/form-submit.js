"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

function FormSubmit() {
    const status = useFormStatus()
    console.log("status", status)

    if(status.pending){
        return <p>Creating Post</p>
    }
  return (
    <>
      <button type='reset'>Reset</button>
      <button>Create Post</button>
    </>
  )
}

export default FormSubmit
