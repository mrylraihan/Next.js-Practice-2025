'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

function error() {
  const pathname = usePathname()
  return (
    <div>
      <h1>Page not found! here : {pathname} is incorrect</h1>
    </div>
  )
}

export default error
