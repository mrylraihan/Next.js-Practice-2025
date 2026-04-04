"use client"
import React, { use, useEffect, useState } from 'react'
import { getBlogs } from '../lib/getBlogs'
import { usePathname, useRouter } from 'next/navigation'


function Blog() {
const [data, setData] = useState([])  
const usePathnameValue = usePathname()
const nav = useRouter()
useEffect( ()=>{
        getBlogs()
        .then(setData)
        .catch(console.error)
},[])
    console.log(data)
  const navigateToSingleBlog = (id) => {
    nav.push(`${usePathnameValue}/${id}`)
  }
  return (
    <div>
        <h1>Blog Server Side</h1>
      {data.map(blog=>{
        return (
					<p key={blog.id} onClick={navigateToSingleBlog.bind(null, blog.id)}>
						{blog.title}
					</p>
				)
      })}
    </div>
  )
}

export default Blog