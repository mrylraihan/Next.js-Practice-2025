import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Single() {
    const params = useParams();
    const id = params.id;
    const nav = useNavigate();
  return (
    <div>
      <h1>Person: {id}</h1>
      <button onClick={()=>nav('..')}>Go Back</button>
    </div>
  )
}

export default Single
