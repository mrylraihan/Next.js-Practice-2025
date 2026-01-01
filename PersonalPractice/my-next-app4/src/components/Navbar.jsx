import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <ul>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/about'}><li>About</li></Link>
            <Link href={'/more'}><li>More</li></Link>
            <Link href={'/blog'}><li>Blog</li></Link>
        </ul>
    </div>
  )
}

export default Navbar