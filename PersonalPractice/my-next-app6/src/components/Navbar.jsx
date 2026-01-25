import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
            <ul style={{display:"flex", gap:"20px", listStyleType:"none"}}>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/more'><li>More</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
