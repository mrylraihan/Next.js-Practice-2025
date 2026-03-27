"use client"
import React from 'react'

function error(props) {
    console.log(props)
  return (
    <main className='error'>
      <h1>An Error Occured</h1>
        <p>{props.error.message}</p>
    </main>
  )
}

export default error
