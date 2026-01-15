import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <Link href='/'><p>Home</p></Link>
      <Link href='/meals'><p>Meals</p></Link>
      <Link href='/meals/share'><p>Meal Share</p></Link>
      <Link href='/community'><p>community</p></Link>
    </div>
  )
}

export default Navbar
