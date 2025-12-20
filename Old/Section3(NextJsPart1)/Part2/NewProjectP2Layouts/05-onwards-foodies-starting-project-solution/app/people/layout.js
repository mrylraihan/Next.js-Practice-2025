import Link from 'next/link'
import React from 'react'

function PeopleLayout({children}) {
  return (
    <>
    <div>
        <h1>People Layout</h1>
          <ul>
              <li><Link href='/people/more'>People More</Link></li>
              <li><Link href='/people/about'>People About</Link></li>
          </ul>
    </div>
    {children}
    </>
  )
}

export default PeopleLayout