"use client"
function BlogPostPage({params}) {
  console.log(params)
  return (
    <div>BlogPostPage in {params.postId}</div>
  )
}

export default BlogPostPage