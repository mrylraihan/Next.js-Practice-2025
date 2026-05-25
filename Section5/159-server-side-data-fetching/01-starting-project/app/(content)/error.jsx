'use client'
import React from 'react'

function ErrorPage({error}) {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorPage