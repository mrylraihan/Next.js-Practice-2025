'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
    const [post, setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setPost)
        .catch(console.error)
    })
    console.log(post)
  return (
    <div>
      <div>
        {post.length > 0 &&  post.map(ele=>{
            return <p><Link href={`/post/${ele.id}`}>Post-{ele.id}</Link></p>
        }) }
      {post.length == 0 && <>
      <p><Link href={'/post/post-1'}>Post-1</Link></p>
      <p><Link href={'/post/post-2'}>Post-2</Link></p>
    </>}
    </div>
    </div>
  )
}

export default page
