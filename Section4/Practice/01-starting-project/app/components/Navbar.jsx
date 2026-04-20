import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <main id={'main-header'}>
        <ul>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/news'}><li>News</li></Link>
        </ul>
    </main>
  )
}

export default Navbar