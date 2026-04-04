import React from 'react'
import { getBlogsSingle } from '../../lib/getBlogs'
import Link from 'next/link'
async function SinglePageBlog({params}) {
    const paramData = await params
    const id = paramData.id
    const blogData = await getBlogsSingle(id)
    console.log(blogData)
  return (
    <div>
        <h1>{blogData.title}</h1>
        <p>{blogData.body}</p>
        <p>param id is {id}</p>
        <Link href="/blogs-server">Back to Blogs</Link>
    </div>
  )
}

export default SinglePageBlog