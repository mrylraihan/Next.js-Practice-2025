import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
      </ul>
    </nav>   
  )
}

export default Navbar