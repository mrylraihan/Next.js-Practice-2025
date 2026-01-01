import React from 'react'

function BlogPostPage(props) {
    console.log("BlogPostPage", props)
    console.log(props.params)
  return (
    <div>
      <h1>Blog Page : {props.params.slug}</h1>
    </div>
  )
}

export default BlogPostPage
