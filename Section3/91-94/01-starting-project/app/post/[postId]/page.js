'use client'
import { useParams } from 'next/navigation';
import React from 'react'

function page() {
// function page({params}) {
  // const postId = params.postId
  const params = useParams();
  const postId = params.postId
  console.log(params)
  return (
    <div>
      <p>Post id: {postId}</p>
    </div>
  )
}

export default page
