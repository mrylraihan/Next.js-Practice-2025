import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
		<div>
			<h1>Navbar</h1>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/csslayouts'>css layouts</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/team'>Team</Link>
				</li>
				<li>
					<Link href='/testForm'>Test form</Link>
				</li>
				<li>
					<Link href='/testForm2'>Test form2</Link>
				</li>
				<li>
					<Link href='/testForm3'>Test form3</Link>
				</li>
				<li>
					<Link href='/testForm4'>Test form4</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar