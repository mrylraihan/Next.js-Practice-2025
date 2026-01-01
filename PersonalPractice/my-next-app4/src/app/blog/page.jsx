'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function BlogPage() {
    const [data, setData] = useState('')
    const router = useRouter()
    const pathname = usePathname()   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setData)
        .catch(console.error)
    },[])
    console.log(data)
  return (
    <div>
      <h1>Blog List</h1>
      {data && data.map(ele=>{
        return <p onClick={()=>router.push(`${pathname}/${ele.id}`)} key={ele.title}>{ele.title}</p>
      })}
    </div>
  )
}

export default BlogPage
