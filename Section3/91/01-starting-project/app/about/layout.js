import Link from 'next/link'
import React from 'react'

function layout(props) {
  return (
    <div>
        <h1>About layouts</h1>
      <Link href={'/'}>Home</Link>
      {props.children}
    </div>
  )
}

export default layout
