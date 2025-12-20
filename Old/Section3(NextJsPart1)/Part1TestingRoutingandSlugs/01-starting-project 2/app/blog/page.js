import Link from "next/link"

function BlogPost() {
  return (
    <div>
          <h1>BlogPost</h1>
          <ul>
            <li><Link href={'/blog/post-1'}>Post 1</Link></li>
            <li><Link href={'/blog/post-2'}>Post 2</Link></li>
          </ul>
    </div>
  )
}

export default BlogPost