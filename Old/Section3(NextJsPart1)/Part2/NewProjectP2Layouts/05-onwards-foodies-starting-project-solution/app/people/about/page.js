"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>router.push('/')}>Go Home</button>
    </div>
  )
}

export default About