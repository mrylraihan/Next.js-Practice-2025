import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
		<div>
			<h1>Navbar</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/team">Team</Link></li>
            </ul>
		</div>
	)
}

export default Navbar