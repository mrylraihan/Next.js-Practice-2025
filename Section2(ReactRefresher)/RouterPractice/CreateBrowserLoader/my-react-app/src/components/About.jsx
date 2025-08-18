import React from 'react'
import { useLoaderData } from 'react-router-dom'

function About() {
  const loader = useLoaderData()
  console.log(loader)
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About