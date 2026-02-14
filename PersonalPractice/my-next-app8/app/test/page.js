"use client"
import React, { useState, useEffect } from 'react'
import { getAllBlogs } from '../lib'

 function Test() {
    const [data, setData] = useState([])    

    useEffect(() => {
        getAllBlogs().then(blogs => {
            setData(blogs)
        })
    },[])
    console.log("useEffect ", data);
  return (
    <div>
      <h1>Test Page</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  )
}

export default Test
