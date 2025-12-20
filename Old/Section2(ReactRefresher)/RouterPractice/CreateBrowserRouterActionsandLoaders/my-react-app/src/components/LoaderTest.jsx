import React from 'react'
import { useLoaderData } from 'react-router-dom';

function LoaderTest() {
  const loader = useLoaderData();
  console.log(loader)
  return (
    <div>
      <h1>Loader Test</h1>
    </div>
  )
}

export default LoaderTest


export const loader = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then((response) => response.json())
		.then((json) => {
      console.log(json)
      return json
    })
}