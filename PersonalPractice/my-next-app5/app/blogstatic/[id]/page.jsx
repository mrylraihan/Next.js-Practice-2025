import React from 'react'

async function Blog({params}) {
    const {id} = await params
  return (
    <div>
      <h1>Single Blog : {id}</h1>
    </div>
  )
}

export default Blog
