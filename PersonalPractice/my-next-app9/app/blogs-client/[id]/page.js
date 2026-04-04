"use client"
import React, { useEffect, useState } from 'react'
import { getBlogsSingle } from '../../lib/getBlogs'
import Link from 'next/link'
import { useParams } from 'next/navigation'
function SinglePageBlog() {
    const paramData =  useParams()
    const [data, setData] = useState("")
    const id = paramData.id

    useEffect(()=>{
      getBlogsSingle(id)
      .then(setData)
      .catch(console.error)
    },[])
    
   console.log(id)
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <p>param id is {id}</p>
        <Link href="/blogs-server">Back to Blogs</Link> 
    </div>
  )
}

export default SinglePageBlog
// you can use this below if you want to mix and match between server and client components.
// import React from 'react'
// import { getBlogsSingle } from '../../lib/getBlogs'
// import Link from 'next/link'
// async function singlePageBlog() {
//     const paramData = await params
//     const id = paramData.id
//     const blogData = await getBlogsSingle(id)
//     console.log(blogData)
//   return (
//     <div>
//         <h1>{blogData.title}</h1>
//         <p>{blogData.body}</p>
//         <p>param id is {id}</p>
//         <Link href="/blogs-server">Back to Blogs</Link>
//     </div>
//   )
// }

// export default singlePageBlog