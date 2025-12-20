import Link from 'next/link'
import React from 'react'

function Navbar(props) {
  return (
    <>
    <div>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/books">Books</Link>
        </li>
      </ul>
    </div>
        {props.children}
    </>
  )
}

export default Navbar
