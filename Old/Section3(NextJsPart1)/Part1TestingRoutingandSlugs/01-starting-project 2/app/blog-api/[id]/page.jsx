"use client"
import React, { useEffect, useState } from 'react'

function page({params}) {
    console.log(params)
    const [data, useData] = useState({})
    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
      .then((response) => response.json())
      .then(useData)
      .catch(console.error)
        },[])
  return (
    <div>
      <h1>id {params.id}</h1>
      <h1>title {data.title}</h1>
    </div>
  )
}

export default page
