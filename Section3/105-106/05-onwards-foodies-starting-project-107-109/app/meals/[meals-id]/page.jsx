'use client';
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

function Meal({params}) {
  // const para = useParams();
  // console.log("para", para)
  // const path = usePathname();
  // console.log(path)
    console.log(params)
  return (
    <div>
      <h1>Meal:{params['meals-id']}</h1>
    
    </div>
  )
}

export default Meal
