'use client'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

function About() {
    const router = useRouter()
     const pathname = usePathname()
  return (
    <div>
        <h1>About</h1>
        <button onClick={()=>router.push('/me')}>Learn more about me</button>
        <button onClick={()=>router.push(pathname+'/me')}>Learn more about me correct</button>
    </div>
  )
}

export default About
