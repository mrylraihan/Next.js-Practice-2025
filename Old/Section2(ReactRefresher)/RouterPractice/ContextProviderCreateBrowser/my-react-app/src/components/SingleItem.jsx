import React from 'react'
import { useParams } from 'react-router-dom'

function SingleItem() {
    const id = useParams().id
    console.log(id)
  return (
    <div>
      <h1> The id is {id}</h1>
    </div>
  )
}

export default SingleItem
