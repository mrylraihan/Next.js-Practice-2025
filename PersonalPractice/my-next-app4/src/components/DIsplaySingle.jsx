"use client"
import React, { useEffect, useState } from 'react'

function DisplaySingle({id}) {
    const [data, setData] = useState('')
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res=>res.json())
        .then(setData)
        .catch(console.error)
    },[])
  return (
    <div>
      {data && <h1>{data.title}</h1>}
    </div>
  )
}

export default DisplaySingle
