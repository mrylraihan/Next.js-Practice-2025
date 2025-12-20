import React from 'react'
import { useMyContext } from '../hooks/useMyContext'

function Extra() {
     const myContext = useMyContext()
        
  return (
    <div>
      <h1>Extra</h1>
      <p>{myContext.name}</p>
    </div>
  )
}

export default Extra
