import React from 'react'
import { useLoaderData } from 'react-router-dom'

export function loader (){
   return fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((response) => response.json())
			.then((json) => {
                console.log(json)
                return json
            })
   
}


function LoaderTest() {
    const data = useLoaderData()
    console.log("Loader Data", data)
  return (
    <div>
      <h1>Loader Test</h1>
    </div>
  )
}

export default LoaderTest
