import Link from 'next/link'
import React from 'react'

function More() {
  return (
    <div>
      <h1>More Page</h1>
      <ul>
        <li><Link href='/more/first'>More First</Link></li>
        <li><Link href='/more/second'>More Second</Link></li>
        <li><Link href='/more/third'>More Third</Link></li>
      </ul>
    </div>
  )
}

export default More
