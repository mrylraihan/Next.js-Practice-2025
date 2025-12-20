import React from 'react'
import { useMyContext } from '../hooks/useMyContext'

function Home() {
    const myContext = useMyContext()
    console.log(myContext)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
