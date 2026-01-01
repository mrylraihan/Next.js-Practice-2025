"use client"
import DisplaySingle from '@/components/DIsplaySingle'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function BlogPostPage() {
   const params = useParams()
    console.log(params)
    const [data, setData] = useState('')
        useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/posts/'+params.blogId)
            .then(res=>res.json())
            .then(setData)
            .catch(console.error)
        },[])
  return (
    <div>
      <h1>BlogPostPage {params.blogId}</h1>
       {data && <h1>{data.title}</h1>}
      {/* <DisplaySingle id={params.blogId}/> */}
    </div>
  )
}

export default BlogPostPage

// async function BlogPostPage(props) {
//    const params = await props.params
//     console.log(params)
//   return (
//     <div>
//       <h1>BlogPostPage {params.blogId}</h1>
//       <DisplaySingle id={params.blogId}/>
//     </div>
//   )
// }

// export default BlogPostPage
