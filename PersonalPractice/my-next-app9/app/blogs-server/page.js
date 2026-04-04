import React from 'react'
import { getBlogs } from '../lib/getBlogs'
import Link from 'next/link'

async function Blog() {
    const blogs = await getBlogs()
    console.log(blogs)
  return (
    <div>
        <h1>Blog Server Side</h1>
      {blogs.map(blog=>{
        return (
					<Link href={`/blogs-server/${blog.id}`} key={blog.id}>
						<p>{blog.title}</p>
					</Link>
				)
      })}
    </div>
  )
}

export default Blog