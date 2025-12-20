import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Single() {
  const [item, setItem] = useState({})
  const params = useParams()
  const id = params.id
  const nav = useNavigate()
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((response) => response.json())
        .then((json) => {
          setItem(json)
          return json
        })
        .catch(console.error)
    }, [])
	return (
		<div>
			<h1>Single</h1>
			{item && <div>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>}
      <button onClick={nav.bind(this, -1)}>Go Back</button>
		</div>
	)
}

export default Single
