import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function SingleItem() {
    const id = useParams().id
    const nav = useNavigate()
  return (
    <div>
      <h2>{id}</h2>
      <button onClick={nav.bind(this, -1)}>Go back</button>
    </div>
  )
}

export default SingleItem
