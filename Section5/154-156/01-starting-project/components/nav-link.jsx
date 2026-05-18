import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({ href, children }) {
	const path = usePathname()
	console.log('path', path)

	return (
		<li>
			<Link href={href} className={path.startsWith(href) ? 'active' : ''}>
				{children}
			</Link>
		</li>
	)
}

export default NavLink
