import Books from '@/components/Books'
import React from 'react'

function books(props) {
  console.log("props in books.jsx", props)
  console.log("test in books page")
  return (
    <div>
      <Books />
    </div>
  )
}

export default books
