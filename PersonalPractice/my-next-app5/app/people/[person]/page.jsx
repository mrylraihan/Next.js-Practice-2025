"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function PersonPage() {
    const params = useParams()
    console.log(params)
  return (
    <div>
      <h1>{params.person}</h1>
    </div>
  )
}

export default PersonPage
